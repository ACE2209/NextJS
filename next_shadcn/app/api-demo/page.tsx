"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // shadcn
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Product = { id: number; name: string; price: number };

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  async function fetchProducts() {
    const res = await fetch("/api/product");
    setProducts(await res.json());
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function addProduct() {
    await fetch("/api/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price: parseFloat(price) }),
    });
    setName("");
    setPrice("");
    fetchProducts();
  }

  async function updateProduct() {
    if (!editId) return;
    await fetch("/api/product", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: editId, name, price: parseFloat(price) }),
    });
    setEditId(null);
    setName("");
    setPrice("");
    fetchProducts();
  }

  async function deleteProduct(id: number) {
    await fetch("/api/product", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchProducts();
  }

  return (
    <div className="p-6 space-y-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Sản phẩm LEGO</h1>

      <div className="space-y-2">
        <Label htmlFor="name">Tên sản phẩm</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="price">Giá ($)</Label>
        <Input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required // yêu cầu người dùng nhập
        />

        <div className="flex gap-2 mt-2">
          <Button onClick={editId ? updateProduct : addProduct}>
            {editId ? "Cập nhật" : "Thêm"}
          </Button>
          {editId && (
            <Button
              variant="secondary"
              onClick={() => {
                setEditId(null);
                setName("");
                setPrice("");
              }}
            >
              Hủy
            </Button>
          )}
        </div>
      </div>

      <Separator />

      {products.map((p) => (
        <Card key={p.id} className="mb-4">
          <CardContent className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-500">
                ${Number(p.price ?? 0).toFixed(2)}
              </p>
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                onClick={() => {
                  setEditId(p.id);
                  setName(p.name);
                  setPrice(p.price.toString());
                }}
              >
                Sửa
              </Button>
              <Button variant="outline" onClick={() => deleteProduct(p.id)}>
                Xóa
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
