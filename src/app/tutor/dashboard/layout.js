import Navbar from "@/components/block/tutor/Navbar"
import Footer from "@/components/block/tutor/Footer"

export default function LayoutDashboardTutor({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}