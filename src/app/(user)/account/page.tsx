import { GetUser } from "@/utils/user";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getUser();

  let role = "USER";

  if (data?.user?.id) {
    console.log("one!");
    const user = await GetUser(data?.user?.id as string);
    console.log(user);
    if (user?.role) {
      role = user?.role;
    }
  }

  return (
    <div className="min-h-screen w-full dark:bg-gray-900 py-16">
      <div className="max-w-screen-xl flex flex-col gap-8 justify-center px-7 mx-auto">
        <form method="POST" action="/auth/logout" className="w-full">
          <button
            className="px-6 py-2 font-bold text-center w-full bg-green-500 hover:bg-green-600 transition rounded-lg"
            type="submit"
          >
            Log Out
          </button>
        </form>
        {role === "ADMIN" && (
          <Link
            className="px-6 py-2 font-bold text-center bg-green-500 hover:bg-green-600 transition rounded-lg"
            href="/admin"
          >
            Admin
          </Link>
        )}
      </div>
    </div>
  );
}
