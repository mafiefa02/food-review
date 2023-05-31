import Image from "next/image"
import logo from "../../../public/logo.svg"

export default function NavbarLogo() {
    return (
        <Image src={logo} alt="Logo Setara Biru" width={200} height={200} className="pointer-events-none" />
    )
}