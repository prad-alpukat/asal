import BreadcrumbDashboard from "@/components/block/BreadcrumbDashboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ExploreClass from "./ExploreClass";

export default function ExploreClassPage() {
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
    ]

    return (
        <main>
            <section className="container py-10">
                <BreadcrumbDashboard data={breadcrumb} />
                <div className="flex justify-between mt-10">
                    <h1 className="text-2xl font-bold">Jelajahi Kelas</h1>
                    <div className="flex gap-2">
                        <Input placeholder="Search" className="w-64" />
                        <Button>Cari</Button>
                    </div>
                </div>
                <div className="mt-4">
                    <ExploreClass />
                </div>
            </section>
        </main>
    )
}