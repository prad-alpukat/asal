"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import LogoBlack from "@/assets/logo-black.png"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter()

    const handleLogout = () => {
        Swal.fire({
            title: "Apakah anda yakin?",
            text: "Anda akan keluar dari akun ini",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ya, Keluar",
            cancelButtonText: "Batal",
            confirmButtonColor: "#dc2626",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Berhasil Keluar",
                    icon: "success",
                    confirmButtonText: "OK",
                }).then(() => {
                    router.push("/")
                })
            }
        })
    }

    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <Link href={"/mahasiswa/dashboard"} className="flex gap-4 items-center">
                    <Image src={LogoBlack} alt="logo" className="h-8 w-auto" />
                    <p className="font-bold text-2xl"> - Mahasiswa</p>
                </Link>
                <ul className="flex space-x-2 items-center">
                    <li>
                        <Link href="/mahasiswa/dashboard">
                            <Button variant="ghost">Kelas yang Dipunya</Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/mahasiswa/dashboard/explore-class">
                            <Button variant="ghost">Jelajahi Kelas Lain</Button>
                        </Link>
                    </li>
                    <li>

                        <Button onClick={handleLogout} variant="destructive" className="ml-10">Logout</Button>

                    </li>
                </ul>
            </nav>
        </header>
    )
}