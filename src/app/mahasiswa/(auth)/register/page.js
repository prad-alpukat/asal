"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Link from "next/link"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"


export default function RegisterMahasiswa() {

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Register Berhasil",
            icon: "success",
            confirmButtonText: "OK",
        }).then((result) => {
            if (result.isConfirmed) {
                router.push(`/mahasiswa/login`)
            }
        })
    }

    return (
        <main>
            <section>
                <div className="container py-20">

                    <Card className="max-w-sm mx-auto">
                        <CardHeader>
                            <CardTitle>Daftar Mahasiswa</CardTitle>
                        </CardHeader>
                        <CardContent >
                            <form onSubmit={handleSubmit}>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Nama Lengkap</Label>
                                        <Input id="name" placeholder="Nama lengkap anda" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="Contoh@email.com" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="phone">No Telp</Label>
                                        <Input id="phone" type="number" placeholder="Nomor Telp anda" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" placeholder="Password" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="confirm-password">Password</Label>
                                        <Input id="confirm-password" type="password" placeholder="confirm password" />
                                    </div>
                                    <Button type="submit">Buat Akun</Button>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter>
                            <p>Sudah Daftar? <Link href="/mahasiswa/login" className="font-bold text-cyan-500">Masuk</Link></p>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </main>
    )
}