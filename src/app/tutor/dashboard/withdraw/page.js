"use client"

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
import { useRouter } from 'next/navigation'


export default function Withdraw() {
    const router = useRouter()

    const breadcrumb = [
        {
            name: "Tutor",
            link: "/tutor/dashboard"
        },
        {
            name: "Dashboard",
            link: "/tutor/dashboard"
        },
        {
            name: "Withdraw",
            link: "/tutor/dashboard/withdraw"
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Withdraw Berhasil",
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
            <section className="container py-10">
                <BreadcrumbDashboard data={breadcrumb} />
                <div className="mt-10">
                    <Card className="max-w-md mx-auto mt-8">
                        <CardHeader>
                            <CardTitle>Withdraw</CardTitle>
                        </CardHeader>
                        <CardContent >
                            <form onSubmit={handleSubmit}>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="bank">Bank</Label>
                                        <Select id="bank" required>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih Bank" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="bri">BRI</SelectItem>
                                                <SelectItem value="bca">BCA</SelectItem>
                                                <SelectItem value="jago">Jago</SelectItem>
                                            </SelectContent>
                                        </Select>

                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="no-rek">Nomor Rekening</Label>
                                        <Input required id="no-rek" type="number" placeholder="Nomor rekening tujuan" />
                                    </div>
                                    <Button type="submit">Withdraw</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}