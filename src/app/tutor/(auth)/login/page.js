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

export default function LoginTutor() {
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Login Berhasil",
            icon: "success",
            confirmButtonText: "OK",
        }).then((result) => {
            if (result.isConfirmed) {
                router.push(`/tutor/dashboard`)
            }
        })
    }
    return (
        <main>
            <section>
                <div className="container py-20">
                    <Card className="max-w-sm mx-auto">
                        <CardHeader>
                            <CardTitle>Login Tutor</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent >
                            <form onSubmit={handleSubmit}>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="Contoh@email.com" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" placeholder="Password" />
                                    </div>
                                    <Button className="w-full" type="submit">Masuk</Button>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter>
                            <p>Belum punya akun? <Link href="/tutor/register" className="font-bold text-cyan-500">daftar</Link></p>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </main>
    )
}