import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import CardImage from "@/assets/card-header.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Swal from "sweetalert2"

export default function CardClass({ id = "test", title = "Card Title", description = "Card Description" }) {

    const handleDelete = () => {
        Swal.fire({
            title: "Apakah anda yakin?",
            text: "Kelas yang sudah dihapus tidak bisa dikembalikan",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ya, Hapus",
            cancelButtonText: "Batal",
            confirmButtonColor: "#dc2626",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Kelas Berhasil Dihapus",
                    icon: "success",
                    confirmButtonText: "OK",
                })
            }
        })
    }

    return (
        <Card className="w-full overflow-hidden">
            <Image src={CardImage} alt="random image" className="w-full h-44 object-cover" />
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                    <Link href={`/tutor/dashboard/${id}`}>
                        <Button size="xs">Manage</Button>
                    </Link>
                    <Link href={`/tutor/dashboard/edit-class/${id}`}>
                        <Button variant="outline" size="xs">Edit</Button>
                    </Link>
                </div>
                <Button variant="ghost" size="xs" onClick={handleDelete}>Hapus</Button>
            </CardFooter>
        </Card>

    )
}