import Image from "next/image";
import Books from "@/assets/books.svg";
import BookStacked from "@/assets/BookStack.webp";
import Contact from "@/assets/Contact.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative dark:bg-gray-900">
      <div
        className="min-h-screen max-w-screen-xl mx-auto px-4 
      sm:px-6 lg:px-8 flex flex-col gap-3 pt-[10rem]"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1
      className="dark:text-white mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight p-3
      leading-none text-gray-900 md:text-5xl lg:text-6xl "
          >
            <span
              className="
      bg-gradient-to-br from-green-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone
      "
            >
              Acnowledge,
            </span>{" "}
            and seek truth!
          </h1>
          <p
      className="mb-8 text-sm sm:text-lg font-normal 
          text-gray-500 lg:text-xl sm:px-16 
          lg:px-48 dark:text-gray-400"
          >
            Thank you for choosing Echoes of Literature as your literary
            destination. We look forward to helping you discover your next great
            read.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="/shop"
              className="inline-flex justify-center items-center py-3 px-5 
      text-base font-medium text-center text-white rounded-lg bg-gradient-to-br from-green-500 to-cyan-500
      bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
            >
              Browse Books
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              About Us
            </Link>
          </div>
        </div>
        <div className="dark:brightness-[0.85] w-full flex items-center justify-center">
          <Image src={Books} alt="books" />
        </div>
      </div>
      <div className="relative text-white dark:text-gray-900">
        <div className="custom-shape-divider-top-1695576915">
            <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="bg-green-500  min-h-screen pt-[15rem]">
        <div className="max-w-screen-xl justify-center flex flex-col gap-20 mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex lg:flex-row flex-col sm:pt-0 pt-[5rem] justify-between gap-5 w-full">
            <h2 className="text-4xl font-semibold w-full text-white">
              Who We Are?
            </h2>
            <p className="dark:text-gray-600 text-gray-200">
              At Echoes Of Literature, we believe that books are more than just
              words on pages. They are gateways to different worlds, sources of
              knowledge, and companions on life&apos;s journey. Our bookstore is
              not just a place to buy books; it&apos;s as a haven for readers
              and a hub for literary exploration.
            </p>
          </div>
          <Image src={BookStacked} className="w-full  object-cover aspect-video rounded" alt="books" />
        </div>
      </div>
      <div className="relative">
        <div className="text-green-500 custom-shape-divider-top-1695639847">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="min-h-[50rem] sm:min-h-screen gap-3 h-full max-w-screen-xl mx-auto flex flex-col justify-center items-center px-4 sm:px-6 py-[0rem] pt-[10rem] lg:pt-[15rem] lg:px-8 lg:py-[12rem]">
        <h2 className="md:text-6xl text-3xl font-semibold dark:text-white">
          Contact Us!
        </h2>
        <Image src={Contact} alt="books" className="w-full h-full" />
        <Link
          href="/contact"
          className="max-[500px]:text-sm max-[500px]:px-4 bg-gradient-to-br from-green-500 to-cyan-500
      max-[500px]:py-3 duration-500 border-0 hover:from-green-600 hover:to-cyan-600 transition-all text-white font-bold py-4 px-8 rounded-full"
        >
          Contact Page
        </Link>
      </div>
    </div>
  );
}
