import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import Error from "../auth-error";

export default function Page({ searchParams }: { searchParams: { error?: string } }) {
  const isError = searchParams.error;

  return (
    <div className="min-h-screen w-full dark:bg-gray-900 py-[7rem]">
      {isError && <Error message="Failed to login" />}
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">
          <Link
            href="/"
            className="flex flex-col-reverse gap-5 items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              src={Logo}
              className="w-14 h-14 bg-white rounded-lg mr-2"
              alt="logo"
            />
            Echoes of Literature
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Log In
              </h1>
              <form
                action="/auth/login"
                className="space-y-4 md:space-y-6"
                method="POST"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="dev@stencukpage.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-green-600 hover:underline dark:text-green-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-green-600 
        hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium 
        rounded-lg text-sm px-5 py-2.5
        text-center dark:bg-green-600 dark:hover:bg-green-700 
        dark:focus:ring-green-800"
                >
                  Log In
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/register"
                    className="font-medium text-green-600 hover:underline dark:text-green-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}
