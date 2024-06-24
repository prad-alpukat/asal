import { Button } from "@/components/ui/button";
import OwnedClass from "./OwnedClass";
import { Input } from "@/components/ui/input"
import BreadcrumbDashboard from "@/components/block/BreadcrumbDashboard";

export default function DashboardMahasiswaPage() {
    const breadcrumb = [
        {
            link: "/mahasiswa/dashboard",
            name: "Mahasiswa",
        },
        {
            link: "/mahasiswa/dashboard",
            name: "Dashboard",
        },
    ]
    return (
        <main>
            <section className="container py-10">
                <BreadcrumbDashboard data={breadcrumb} />
                <div className="flex justify-between gap-4 mb-8 mt-10">
                    <h1 className="text-2xl font-bold">Dashboard Mahasiswa</h1>
                    <div className="flex gap-2">
                        <Input className="w-72" type="search" placeholder="cari kelas yang dipunya" />
                        <Button>Cari</Button>
                    </div>
                </div>
                <OwnedClass />
            </section>
        </main>
    )
}