import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function HeaderImg() {
  return (
    <div className="flex gap-3 sm:text-xl text-sm p-5 font-semibold items-center justify-center">
      <h1 className="font-extrabold leading-none">Echoes of Literature</h1>
      <div className="rounded-lg bg-white w-8 h-8 flex items-center justify-center aspect-square">
        <Image
          src={Logo}
          alt="logo"
          className="
        h-8 w-8"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
