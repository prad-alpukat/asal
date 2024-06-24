import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import IllustrationAbout from "@/assets/illustration-2.svg"

import Image from "next/image"


export default function SectionAbout() {
    return (
        <section className="bg-slate-800 text-white" id="about">
            <div className="container py-20">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center mb-10">
                        <div className="max-w-screen-md mx-auto">
                            <h2 className="text-4xl font-bold mb-2">Belajar Lebih Mudah dan Efektif</h2>
                            <p className="font-light text-neutral-300">
                                Di Techtutoringits, kami memahami tantangan belajar yang sering dihadapi mahasiswa. Oleh karena itu, kami menyediakan solusi yang inovatif untuk memudahkan proses belajar Anda:
                            </p>
                        </div>
                    </div>
                    <div className="col-span-6 space-y-4">
                        <Card className="bg-slate-700">
                            <CardHeader className="text-white pb-2">
                                <h6 className="font-bold text-xl">Akses Langsung ke Tutor</h6>
                            </CardHeader>
                            <CardContent className="text-neutral-200">
                                <p>
                                    Mahasiswa dapat dengan mudah menghubungi tutor melalui info kontak yang disediakan untuk mengatur pertemuan Zoom.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-700">
                            <CardHeader className="text-white pb-2">
                                <h6 className="font-bold text-xl">Fleksibilitas Waktu dan Tempat</h6>
                            </CardHeader>
                            <CardContent className="text-neutral-200">
                                <p>
                                    Belajar kapan saja dan di mana saja sesuai dengan kenyamanan Anda.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-6">
                        <Image src={IllustrationAbout} className="w-2/3 mx-auto h-auto" />
                    </div>
                </div>
            </div>
        </section>
    )
}