import ShopItem from "./ShopItem";
import Book1 from "@/assets/Book1.webp";
import Book2 from "@/assets/Book2.webp";
import Book3 from "@/assets/Book3.webp";

export default function Page() {
  const items = [
    {
      name: "Great Book",
      price: "$49.99",
      image: Book1,
    },
    {
      name: "Great Book",
      price: "$49.99",
      image: Book2,
    },
    {
      name: "Great Book",
      price: "$49.99",
      image: Book3,
    },
  ];

  return (
    <div className="min-h-screen py-[5rem] w-full dark:bg-gray-900">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 gap-x-6 gap-y-10 
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          {items.map((item, index) => (
            <ShopItem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
