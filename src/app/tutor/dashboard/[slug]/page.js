"use client"
import { useParams } from "next/navigation";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import BreadcrumbDashboard from "@/components/block/BreadcrumbDashboard";

import ContentClass from "./ContentClass";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SingleClass() {
    const { slug } = useParams();

    const breadcrumb = [
        { name: "Tutor", link: "/tutor/dashboard" },
        { name: "Dashboard", link: "/tutor/dashboard" },
        { name: slug, link: "/tutor/dashboard/" + slug },
    ]

    return (
        <main>
            <section className="container py-10">
                <BreadcrumbDashboard data={breadcrumb} />
                <div className="mt-10">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-1">
                            <h1 className="font-bold mb-4 text-2xl">
                                {slug}
                            </h1>
                            <div className="space-y-2">
                                <p>Nomor Whatsapp: +62 8122 9999 999</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, iusto ad. Ullam modi aliquam neque laboriosam ab dolor, est cumque?</p>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <Card>
                                <CardHeader className="flex flex-row justify-between space-y-0">
                                    <CardTitle>Konten Kelas</CardTitle>
                                    <Link href={`/tutor/dashboard/${slug}/create-content`}>
                                        <Button size="sm">Buat Konten Kelas</Button>
                                    </Link>
                                </CardHeader>
                                <CardContent>
                                    <ContentClass />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}