"use client"

import BreadcrumbDashboard from "@/components/block/BreadcrumbDashboard"
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
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

export default function CreateClass() {

    const router = useRouter()

    const breadcrumd = [
        { name: "Tutor", link: "/tutor/dashbaord" },
        { name: "Dashboard", link: "/tutor/dashboard" },
        { name: "Buat Kelas Baru", link: "/tutor/dashboard/create-class" },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Kelas Berhasil Dibuat",
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
                <div className="container py-10">
                    <BreadcrumbDashboard data={breadcrumd} />
                    <Card className="max-w-md mx-auto mt-8">
                        <CardHeader>
                            <CardTitle>Buat Kelas Baru</CardTitle>
                        </CardHeader>
                        <CardContent >
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="upload-image">Unggah Gambar</Label>
                                        <Input id="upload-image" type="file" className="cursor-pointer" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="title">Judul Kelas</Label>
                                        <Input id="title" type="text" placeholder="Kelas Kalkulus" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea id="description" placeholder="Tulis deskripsi kelas anda" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="price">Harga</Label>
                                        <Input id="price" type="number" placeholder="Harga kelas" />
                                    </div>
                                    <Button type="submit" onClick={handleSubmit}>Buat Kelas</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    )
}