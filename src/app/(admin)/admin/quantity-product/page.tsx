import { redirect } from "next/navigation";

export default function Quantity({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  if (searchParams?.error) {
    return (
      <div className="min-h-screen w-full dark:bg-gray-900">
        <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          INVALID ID OF ITEM
        </h3>
      </div>
    );
  } else {
    throw redirect("/admin");
  }
}
