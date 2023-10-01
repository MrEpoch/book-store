export default function StripeLoading() {
  return (
    <div className="flex flex-col gap-[4rem] items-center justify-center w-full min-h-screen">
      <div className="animate-spin text-black dark:text-white rounded-full h-32 w-32 border-b-2 border-gray-red" />
      <p className="text-2xl font-bold mt-4">Redirecting to Stripe</p>
    </div>
  );
}
