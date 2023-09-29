import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function HeaderLinks() {
  return (
    <div className="hidden w-full md:block md:w-auto" id="is-hidden">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
        <li>
          <Link
            href="/"
            className="block py-2 pl-3 pr-4 text-black rounded hover:text-green-700 md:hover:bg-transparent md:border-0 md:hover:text-green-700 
        md:bg-transparent md:p-0 dark:text-white"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
        md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/shop"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contact
          </Link>
        </li>
        <li>
          <ThemeSwitch
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
                        md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white 
                        md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white 
                        md:dark:hover:bg-transparent"
          />
        </li>
        <li>
          <a
            href="/account"
            className="flex items-center justify-center text-gray-900 rounded hover:bg-gray-100 
                        md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white 
                        md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white 
        md:dark:hover:bg-transparent"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 14 18"
            >
              <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
