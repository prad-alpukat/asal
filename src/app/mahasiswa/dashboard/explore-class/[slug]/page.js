"use client"

import { useParams } from "next/navigation"
import BreadcrumbDashboard from "@/components/block/BreadcrumbDashboard"
import Contents from "./Contents"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ExploreDetailClass() {
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
            link: "/mahasiswa/dashboard/explore-class",
            name: "Jelajahi Kelas",
        },
        {
            link: `/mahasiswa/dashboard/explore-class/${slug}`,
            name: slug,
        },
    ]
    return (
        <main>
            <section className="container py-10">
                <BreadcrumbDashboard data={breadcrumb} />
                <div className="mt-10 grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <h1 className="text-4xl font-bold mb-4">{slug}</h1>
                        <h4 className="font-bold text-xl mb-2">{formatPrice(40_000)}</h4>
                        <div className="space-y-2 mb-8">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum dignissimos nostrum explicabo, quos quidem et ab commodi sit eligendi?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum dignissimos nostrum explicabo, quos quidem et ab commodi sit eligendi?</p>
                        </div>
                        <Link href={`/mahasiswa/dashboard/explore-class/${slug}/payment`}>
                            <Button>Beli Kelas</Button>
                        </Link>
                    </div>
                    <div className="col-span-3 relative p-4 cursor-not-allowed">
                        <Contents />
                        <div className="w-full h-full absolute top-0 left-0 rounded bg-neutral-600/75">
                            <h5 className="font-bold text-6xl text-center mt-36 text-white">Terkunci</h5>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}