import Image from "next/image"
import LogoWhite from "@/assets/logo-white.png"

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-auto">
            <div className="container">
                <Image src={LogoWhite} alt="logo white" className="h-8 w-auto mx-auto" />
            </div>
        </footer>
    )
}