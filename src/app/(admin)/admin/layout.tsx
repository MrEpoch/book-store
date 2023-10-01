import BreadCrumbs from "@/components/BreadCrumbs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col gap-3 w-full">
      <BreadCrumbs />
      {children}
    </div>
  );
}
