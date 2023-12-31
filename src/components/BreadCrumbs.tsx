"use client";
import { usePathname } from "next/navigation";

export default function BreadCrumbs() {
  const url = usePathname().split("/");

  return (
    <nav
      className="flex py-4 px-2 top-4 w-full justify-center dark:bg-darkmode-500 absolute"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href={`/${url[1]}`}
            className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-green-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 mr-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            {url[1]}
          </a>
        </li>
        {url[2] && url[1] !== "shop" && (
          <li>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href={`/${url[1]}/${url[2]}`}
                className="ml-1 text-lg 
                font-medium text-gray-700 hover:text-green-600 
                md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                {url[2].includes("?") ? url[2].split("?")[1] : url[2]}
              </a>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
}
