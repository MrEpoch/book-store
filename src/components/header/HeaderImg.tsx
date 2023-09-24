import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function HeaderImg() {
    return (
        <div className="flex text-xl p-5 font-semibold items-center justify-center">
            <h1 className="font-sans">Echoes of Literature</h1>
            <Image src={Logo} alt="logo" className="
        w-[50px] h-[50px] rounded-full" width={50} height={50} />
        </div>
    )
}
