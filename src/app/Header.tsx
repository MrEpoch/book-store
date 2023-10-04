import HeaderMenu from "@/components/header/HeaderMenu";
import HeaderImg from "@/components/header/HeaderImg";
import Link from "next/link";
import HeaderLinks from "@/components/header/HeaderLinks";

export default function Header() {
  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">      
        <Link href="/" className="flex items-center">
          <HeaderImg />
        </Link>
        <HeaderMenu />
        <HeaderLinks />
      </div>
    </nav>
  );
}
