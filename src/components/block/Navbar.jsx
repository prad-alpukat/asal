"use client"

import Image from "next/image";
import Link from "next/link";
import LogoBlack from "@/assets/logo-black.png";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <nav className="border-b sticky top-0 bg-white">
            <div className="container h-16 items-center grid grid-cols-3">
                {/* logo */}
                <Link href="/" >
                    <Image className="h-8 w-auto" src={LogoBlack} />
                </Link>

                {/* menus */}
                <div>
                    <ul className="flex justify-center">
                        <li>
                            <Link href="/#solution" className="hover:font-bold" >
                                <Button variant="ghost">Solusi</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#about" className="hover:font-bold" >
                                <Button variant="ghost">Tentang Kami</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#faq" className="hover:font-bold" >
                                <Button variant="ghost">Bantuan</Button>
                            </Link>
                        </li>
                    </ul>
                </div>


                {/* login */}
                <div className="flex gap-3 ml-auto">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Daftar</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <Link href="/tutor/register" >
                                <DropdownMenuItem className="cursor-pointer">Tutor</DropdownMenuItem>
                            </Link>
                            <Link href="/mahasiswa/register" >
                                <DropdownMenuItem className="cursor-pointer">Mahasiswa</DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button>Masuk</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <Link href="/tutor/login" >
                                <DropdownMenuItem className="cursor-pointer">Tutor</DropdownMenuItem>
                            </Link>
                            <Link href="/mahasiswa/login" >
                                <DropdownMenuItem className="cursor-pointer">Mahasiswa</DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
        </nav>
    )
}