import Image from "next/image";
import Link from "next/link";

export default function ShopItem({
  item,
}: {
  item: { name: string; price: string; image: any };
}) {
  return (
    <Link
      href="#"
      className="group shadow
        dark:bg-gray-800 rounded p-5 transition duration-300"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={item.image}
          alt={item.name}
          className="h-full w-full max-h-[20rem] object-cover object-center group-hover:brightness-75 transition
        duration-300 ease-in-out"
        />
      </div>
      <h3 className="mt-4 text-sm dark:text-gray-200 text-gray-700">
        {item.name}
      </h3>
      <p className="mt-1 text-lg font-medium dark:text-gray-100 text-gray-900">
        {item.price}
      </p>
    </Link>
  );
}
