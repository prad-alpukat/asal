import Image from "next/image"
import LogoWhite from "@/assets/logo-white.png"

export default function Footer() {
    return (
        <footer className="bg-slate-900 py-4">
            <Image src={LogoWhite} className="h-8 w-auto mx-auto" />
        </footer>
    )
}