"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NextImage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center gap-10">
      {/* Thẻ Card của shadcn UI */}
      <Card className="max-w-xl w-full shadow-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Tối Ưu Ảnh với next/image
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Ảnh responsive + lazy loading mặc định */}
          <div className="relative w-full h-64">
            <Image
              src="/sukuna.png" // ảnh trong public
              alt="lỗi ảnh nè"
              fill // fill = chiếm full div cha
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw" // responsive breakpoints
              priority={false} // = false => lazy load (mặc định)
            />
          </div>

          <p className="text-center text-gray-700">ảnh trong public in ra </p>

          <div className="flex justify-center">
            <Button onClick={() => alert("Đây là nút shadcn/ui!")}>
              Nhấn thử
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
