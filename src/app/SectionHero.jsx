import Image from "next/image";
import LogoBlack from "@/assets/logo-black.png";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import Illustration from "@/assets/illustration-hero.svg";

export default function SectionHero() {
    return (
        <section id="solution">
            <div className="container pt-20">
                {/* text */}
                <div className="text-center flex flex-col items-center">
                    <p>Nikmati kemudahan belajar bersama di</p>
                    <Image src={LogoBlack} className="h-20 w-auto" />
                    <div className="flex gap-4 mt-8">
                        <Link href="/tutor/register">
                            <Button variant="outline">Jadi Tutor</Button>
                        </Link>
                        <Link href="/mahasiswa/login">
                            <Button>Masuk Belajar</Button>
                        </Link>
                    </div>
                </div>

                {/* illustration */}
                <Image src={Illustration} className="h-80 w-auto mx-auto" />
            </div>
        </section>
    )
}