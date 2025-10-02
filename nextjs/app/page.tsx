import Image from "next/image";

type ProductProps = {
  name: string;
  price: string;
  img: string;
};

function ProductCard({ name, price, img }: ProductProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition transform duration-300">
      <Image src={img} alt={name} width={300} height={400} />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">Price: {price}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const products = [
  { name: "Nezuko", price: "100.000", img: "/Nezuko.png" },
  { name: "Tanjiro", price: "120.000", img: "/tanjiro.gif" },
  { name: "Zenitsu", price: "90.000", img: "/zenitsu.png" },
  { name: "Inosuke", price: "110.000", img: "/inosuke.png" },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
      {products.map((p, index) => (
        <ProductCard key={index} name={p.name} price={p.price} img={p.img} />
      ))}
    </div>
  );
}
