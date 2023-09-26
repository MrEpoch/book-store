import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function HeaderLinks() {
    return (
     <div className="hidden w-full md:block md:w-auto" id="is-hidden">
       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                <li>
                    <Link href="/" className="block py-2 pl-3 pr-4 text-black rounded hover:text-green-700 md:hover:bg-transparent md:border-0 md:hover:text-green-700 
        md:bg-transparent md:p-0 dark:text-white" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
        md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                </li>
                <li>
                    <Link href="/shop" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Shop</Link>
                </li>
                <li>
                    <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                </li>

                <li>
                    <ThemeSwitch className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
                        md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white 
                        md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white 
                        md:dark:hover:bg-transparent" />
                </li>
        </ul>
      </div> 
    )
}
