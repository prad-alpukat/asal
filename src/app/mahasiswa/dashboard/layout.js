import Navbar from "@/components/block/mahasiswa/Navbar"
import Footer from "@/components/block/mahasiswa/Footer"

export default function LayoutDashboardMahasiswa({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}