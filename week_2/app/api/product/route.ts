// app/api/product/route.ts
import { NextResponse } from 'next/server';

type Product = { id: number; name: string; price: number };

let products: Product[] = [
  { id: 1, name: 'LEGO Classic Bricks', price: 29.99 },
  { id: 2, name: 'LEGO Star Wars X-Wing', price: 89.99 },
];

// GET: trả danh sách sản phẩm
export async function GET() {
  return NextResponse.json(products);
}

// POST: thêm sản phẩm { name, price }
export async function POST(req: Request) {
  const body = await req.json();
  const newProduct: Product = {
    id: Date.now(),
    name: body.name,
    price: Number(body.price) || 0,
  };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}

// PUT: cập nhật sản phẩm { id, name?, price? }
export async function PUT(req: Request) {
  const body = await req.json();
  const index = products.findIndex(p => p.id === body.id);
  if (body.price !== undefined) {
  body.price = Number(body.price) || 0;
}

  products[index] = { ...products[index], ...body };
  return NextResponse.json(products[index]);
}

// DELETE: xóa sản phẩm { id }
export async function DELETE(req: Request) {
  const body = await req.json();
  products = products.filter(p => p.id !== body.id);
  return NextResponse.json({ success: true });
}
