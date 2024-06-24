"use client"

import Image from "next/image";
import Link from "next/link";
import LogoBlack from "@/assets/logo-black.png";

import { Button } from "@/components/ui/button"

import Swal from "sweetalert2";

import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();

    const handleLogout = () => {
        Swal.fire({
            title: "Apakah kamu yakin?",
            text: "Kamu akan keluar dari aplikasi",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ya, Keluar",
            cancelButtonText: "Batal",
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#4b5563",
        }).then((result) => {
            if (result.isConfirmed) {
                router.push("/");
            }
        });
    }

    return (
        <nav className="border-b">
            <div className="container h-16 items-center grid grid-cols-2">
                {/* logo */}
                <Link href="/tutor/dashboard" className="flex gap-4 items-center">
                    <Image className="h-8 w-auto" src={LogoBlack} />
                    <p className="font-black text-xl"> - TUTOR</p>
                </Link>

                {/* login */}
                <div className="flex items-center gap-4 ml-auto">
                    <Link href={"/tutor/dashboard/create-class"}>
                        <Button variant="outline">
                            Buat Kelas
                        </Button>
                    </Link>
                    <div className="w-[1px] h-8 bg-neutral-600"></div>

                    <Button variant="destructive" onClick={handleLogout}>Logout</Button>

                </div>

            </div>
        </nav>
    )
}