'use client'

import BreadcrumbDashboard from "@/components/block/BreadcrumbDashboard";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Swal from "sweetalert2";
import { useParams, useRouter } from 'next/navigation'
import { useState } from "react";

export default function payment() {
    const [Bank, setBank] = useState("")
    const router = useRouter()

    const { slug } = useParams();
    const breadcrumbs = [
        { name: "Mahasiswa", link: "/mahasiswa/dashboard" },
        { name: "Dashboard", link: "/mahasiswa/dashboard" },
        { name: "Explore Class", link: "/mahasiswa/dashboard/explore-class" },
        { name: "Payment", link: "/mahasiswa/dashboard/explore-class/" + slug + "/payment" },
    ]

    const virtualAccount = [
        { id: 1, bank: "BRI", no_rek: "1234567890" },
        { id: 2, bank: "BCA", no_rek: "0987654321" },
        { id: 3, bank: "Jago", no_rek: "5432167890" },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        // swal loading 4 detik "check status" -> swal success "pembayaran berhasil"
        Swal.fire({
            title: "Check status",
            icon: "info",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
        }).then(() => {
            Swal.fire({
                title: "Pembayaran Berhasil",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                // redirect ke halaman explore class
                router.push(`/mahasiswa/dashboard`)
            })
        })

    }
    return (
        <main>
            <section className="container py-10">
                <BreadcrumbDashboard data={breadcrumbs} />
                <div className="mt-10">
                    <Card className="max-w-md mx-auto mt-8">
                        <CardHeader>
                            <CardTitle>Payment</CardTitle>
                        </CardHeader>
                        <CardContent >
                            <form onSubmit={handleSubmit}>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="bank">Bank</Label>
                                        <Select id="bank" required onValueChange={(e) => { setBank(e) }}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih Bank" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="BRI">BRI</SelectItem>
                                                <SelectItem value="BCA">BCA</SelectItem>
                                                <SelectItem value="JAGO">Jago</SelectItem>
                                            </SelectContent>
                                        </Select>

                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="no-rek">Nomor Rekening</Label>
                                        {virtualAccount.map((item) => (
                                            Bank === item.bank ? <p className="font-bold text-3xl">{item.no_rek}</p> : null
                                        ))}
                                    </div>
                                    <Button type="submit">Bayar</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    )
}