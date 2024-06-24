"use client"

import { useParams } from "next/navigation"
import BreadcrumbDashboard from "@/components/block/BreadcrumbDashboard"
import Contents from "./Contents"

export default function OwnedClassPage() {
    const { slug } = useParams()

    const breadcrumb = [
        {
            link: "/mahasiswa/dashboard",
            name: "Mahasiswa",
        },
        {
            link: "/mahasiswa/dashboard",
            name: "Dashboard",
        },
        {
            link: "/mahasiswa/dashboard",
            name: "Kelas Dipunyai",
        },
        {
            link: `/mahasiswa/dashboard/owned-class/${slug}`,
            name: slug,
        },
    ]
    return (
        <main>
            <section className="container py-10">
                <BreadcrumbDashboard data={breadcrumb} />
                <div className="mt-10 grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <h1 className="text-2xl font-bold mb-4">{slug}</h1>
                        <p className="mb-2">
                            Whatsapp: <a target="_blank" href="https://wa.me/+6288888888" className="text-cyan-600 font-bold ">+62 1228 8888 8888</a>
                        </p>
                        <div className="space-y-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum dignissimos nostrum explicabo, quos quidem et ab commodi sit eligendi?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum dignissimos nostrum explicabo, quos quidem et ab commodi sit eligendi?</p>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <h3 className="font-bold mb-3">Konten: </h3>
                        <Contents />
                    </div>
                </div>
            </section>
        </main>
    )
}