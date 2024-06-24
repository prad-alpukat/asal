"use client"

import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { useParams } from "next/navigation"
import Swal from "sweetalert2"

export default function ContentClass() {
    const { slug } = useParams()

    const data = [
        {
            title: "Pengenalan kalkulus dasar",
            date: "April 23, 2021"
        },
        {
            title: "Pengenalan kalkulus dasar",
            date: "April 23, 2021"
        },
        {
            title: "Pengenalan kalkulus dasar",
            date: "April 23, 2021"
        },
        {
            title: "Pengenalan kalkulus dasar",
            date: "April 23, 2021"
        },
        {
            title: "Pengenalan kalkulus dasar",
            date: "April 23, 2021"
        },
    ]

    const handleDelete = (title) => {
        Swal.fire({
            title: "Apakah Anda Yakin?",
            text: "Konten yang dihapus tidak dapat dikembalikan",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ya, Hapus",
            cancelButtonText: "Batal",
            confirmButtonColor: "#DC2626",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(`${title} Berhasil Dihapus`, "", "success")
            }
        })
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Judul</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell className="justify-end flex gap-3">
                            <Link href={`/tutor/dashboard/${slug}/edit`}>
                                <Button size="xs" variant="outline">Edit</Button>
                            </Link>
                            <Button size="xs" variant="ghost" onClick={() => handleDelete(item.title)}>Hapus</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}