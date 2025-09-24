import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Tailwind() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 p-6">
      <Card className="w-[350px] shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold text-blue-800">Next.js & Shadcn UI</CardTitle>
          <CardDescription className="text-gray-600">Trải nghiệm phát triển web hiện đại</CardDescription>
        </CardHeader>
        <CardContent className="text-gray-700">
          <p className="mb-4">Tailwind CSS giúp bạn xây dựng giao diện nhanh chóng với các lớp utility.</p>
          <p>Shadcn UI cung cấp các component đẹp mắt và có thể tùy chỉnh.</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" className="mr-2 border-blue-500 text-blue-600 hover:bg-blue-50">Tìm hiểu thêm</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Bắt đầu</Button>
        </CardFooter>
      </Card>
    </div>
  );
}