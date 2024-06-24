'use client'

import BreadcrumbDashboard from "@/components/block/BreadcrumbDashboard"
import SectionManageClass from "./SectionManageClass"
import WalletCard from "@/components/block/tutor/WalletCard"

export default function DashboardTutor() {
    const breadcrumb = [
        {
            name: "Tutor",
            link: "/tutor/dashboard"
        },
        {
            name: "Dashboard",
            link: "/tutor/dashboard"
        }
    ]
    return (
        <main>
            <section className="container py-10">
                <BreadcrumbDashboard data={breadcrumb} />

                {/* content */}
                <div className="grid grid-cols-4 gap-8 mt-8">
                    <div className="col-span-3">
                        {/* manage class */}
                        <SectionManageClass />
                    </div>
                    <div className="pt-10">
                        {/* wallet */}
                        <WalletCard />
                    </div>
                </div>
            </section>
        </main>
    )
}