import Link from "next/link";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900 py-8">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://stencukpage.com/" className="hover:underline">
            Alexandr Stenčuk
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link
              href="https://www.privacypolicies.com/live/2470fb14-022a-4f19-a2e0-2893fa1693fd"
              className="mr-4 hover:underline md:mr-6"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
