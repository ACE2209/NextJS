"use client";                       // Cho Next.js biết đây là Client Component (dùng hook, state…).

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // UI components của shadcn
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Định nghĩa kiểu dữ liệu sản phẩm
type Product = { id: number; name: string; price: number };

export default function ProductPage() {
  // ---------------------- STATE ----------------------
  const [products, setProducts] = useState<Product[]>([]); // danh sách sản phẩm
  const [name, setName] = useState("");                   // tên sản phẩm đang nhập
  const [price, setPrice] = useState("");                 // giá sản phẩm đang nhập
  const [editId, setEditId] = useState<number | null>(null); // id sản phẩm đang chỉnh sửa

  // ---------------------- FETCH DỮ LIỆU ----------------------
  // Lấy danh sách sản phẩm từ API
  async function fetchProducts() {
    const res = await fetch("/api/product");   // gọi route API nội bộ
    setProducts(await res.json());             // cập nhật state products
  }

  // Gọi fetchProducts khi component lần đầu render
  useEffect(() => {
    fetchProducts();
  }, []);

  // ---------------------- THÊM SẢN PHẨM ----------------------
  async function addProduct() {
    await fetch("/api/product", {
      method: "POST",                           // phương thức POST
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price: parseFloat(price) }),
    });
    // reset input
    setName("");
    setPrice("");
    fetchProducts();                             // refresh danh sách
  }

  // ---------------------- CẬP NHẬT SẢN PHẨM ----------------------
  async function updateProduct() {
    if (!editId) return;                         // nếu chưa chọn sp để sửa
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

  // ---------------------- XÓA SẢN PHẨM ----------------------
  async function deleteProduct(id: number) {
    await fetch("/api/product", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchProducts();
  }

  // ---------------------- JSX UI ----------------------
  return (
    <div className="p-6 space-y-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Sản phẩm LEGO</h1>

      {/* Form nhập tên & giá sản phẩm */}
      <div className="space-y-2">
        <Label htmlFor="name">Tên sản phẩm</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <Label htmlFor="price">Giá ($)</Label>
        <Input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        {/* Nút thêm hoặc cập nhật */}
        <div className="flex gap-2 mt-2">
          <Button onClick={editId ? updateProduct : addProduct}>
            {editId ? "Cập nhật" : "Thêm"}
          </Button>
          {editId && (
            <Button
              variant="secondary"
              onClick={() => {
                // hủy chế độ sửa
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

      {/* Hiển thị danh sách sản phẩm */}
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
              {/* Nút sửa */}
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
              {/* Nút xóa */}
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
