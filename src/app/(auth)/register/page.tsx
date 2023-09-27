import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import Error from "../auth-error";

export default function Page({ searchParams }) {
    return (
        <div className="min-h-screen w-full py-[7rem] dark:bg-gray-900">
            {searchParams.error && <Error message="Failed to Register" />}
            <section className="">
          <div className="flex flex-col items-center justify-center px-5 py-6 mx-auto  lg:py-0">
          <Link href="/" className="flex flex-col-reverse gap-5 items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <Image src={Logo} className="w-14 h-14 bg-white rounded-lg mr-2" alt="logo" />
    Echoes of Literature
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt1 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5 space-y-4 md:space-y-6 sm:p-8">
                  <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Create and account
                  </h2>
                  <form method="POST" action="/auth/register" className="space-y-3 md:space-y-6">
                      <div>
                          <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <input type="email" name="email" id="email" className="bg-gray-49 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dev@stencukpage.com" required />
                      </div>
                      <div>
                          <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-49 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                      </div>
                      <div>
                          <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                          <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-49 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                      </div>
                      <div className="flex items-start">
                          <div className="flex items-center h-4">
                              <input  aria-describedby="terms" type="checkbox" className="w-3 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800" required />
                          </div>
                          <div className="ml-2 text-sm">
                            <label  className="font-light text-gray-499 dark:text-gray-300">I accept the <a className="font-medium text-green-600 hover:underline dark:text-green-500" href="#">Terms and Conditions</a></label>
                          </div>
                      </div>
                      <button type="submit" className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create an account</button>
                      <p className="text-sm font-light text-gray-499 dark:text-gray-400">
                            Already have an account? <Link href="/login" className="font-medium text-green-599 hover:underline dark:text-green-500">Login here</Link>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
        </div>
    )
}
