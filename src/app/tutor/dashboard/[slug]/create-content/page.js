"use client"

import BreadcrumbDashboard from "@/components/block/BreadcrumbDashboard";
import { useParams } from "next/navigation";

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
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation'

export default function CreateContent() {
    const router = useRouter()
    const { slug } = useParams();
    const breadcrumb = [
        { name: "Tutor", link: "/tutor/dashboard" },
        { name: "Dashboard", link: "/tutor/dashboard" },
        { name: slug, link: "/tutor/dashboard/" + slug },
        { name: "Buat Konten", link: "/tutor/dashboard/" + slug + "/create-content" },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Konten kelas Berhasil Dibuat",
            icon: "success",
            confirmButtonText: "Lihat Konten",
        }).then((result) => {
            if (result.isConfirmed) {
                router.push(`/tutor/dashboard/${slug}`)
            }
        })
    }

    return (
        <main>
            <div className="container py-10">
                <BreadcrumbDashboard data={breadcrumb} />
                <Card className="max-w-md mx-auto mt-8">
                    <CardHeader>
                        <CardTitle>Buat Konten Kelas {slug}</CardTitle>
                    </CardHeader>
                    <CardContent >
                        <form onSubmit={handleSubmit}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="upload-image">Unggah Gambar Thumbnail</Label>
                                    <Input required id="upload-image" type="file" className="cursor-pointer" accept="image/png, image/gif, image/jpeg" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="upload-video">Unggah Video</Label>
                                    <Input required id="upload-video" type="file" accept="video/mp4,video/x-m4v,video/*" className="cursor-pointer" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="title">Judul Konten</Label>
                                    <Input required id="title" type="text" placeholder="Pengenalan Kalkulus" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="description">Deskripsi</Label>
                                    <Textarea required id="description" placeholder="Tulis deskripsi konten anda" />
                                </div>
                                <Button type="submit">Buat Konten Kelas</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}