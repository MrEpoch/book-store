import Image from "next/image";
import Books from "@/assets/books.svg";

export default function Home() {
  return (
        <div className="min-h-screen relative dark:bg-gray-900">
            <div className="min-h-screen max-w-screen-xl mx-auto px-4 
      sm:px-6 lg:px-8 flex flex-col gap-3">
                <div className="">
                    <h1 className="text-2xl font-semibold text-white">
                        Acnowledge and seek the truth
                    </h1>
                    <p className="mt-4 text-gray-300">
                        
                    </p>
                    <div className="flex gap-5">
                        <button className="bg-lime-500 text-white px-4 py-2 rounded-md">
                            Contact
                        </button>
                        <button className="bg-lime-500 text-white px-4 py-2 rounded-md">
                            See Books
                        </button>
                    </div>
                </div>
                <div className="dark:brightness-[0.85]">
                    <Image src={Books} alt="books" />
                </div>
            </div>
            <div className="relative text-white dark:text-gray-900">
                <div className="custom-shape-divider-top-1695576915">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path fill="currentColor" d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"></path>
                    </svg>
                </div>
            </div>
            <div className="bg-green-500 min-h-screen pt-[15rem]">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex justify-between gap-5 w-full">
                        <h2 className="text-2xl font-semibold w-full dark:text-black text-white">
                            Who We Are?
                        </h2>
                        <p className="text-gray-600">
                            At Echoes Of Literature, we believe that books are more than just words on pages. 
                              They are gateways to different worlds, sources of knowledge, and companions on life&apos;s journey. 
                            Our bookstore is not just a place to buy books; it&apos;s as a haven for 
                            readers and a hub for literary exploration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}
