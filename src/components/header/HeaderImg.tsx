import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function HeaderImg() {
    return (
        <Image src={Logo} alt="logo" width={100} height={100} />
    )
}
