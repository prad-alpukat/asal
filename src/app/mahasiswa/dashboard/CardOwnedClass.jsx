import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import CardImage from "@/assets/card-header.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CardOwnedClass({ id = "test", title = "Card Title", description = "Card Description" }) {
    return (
        <Card className="w-full overflow-hidden">
            <Image src={CardImage} alt="random image" className="w-full h-44 object-cover" />
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
                <Link href={`/mahasiswa/dashboard/owned-class/${id}`}>
                    <Button variant="outline">Detail</Button>
                </Link>
            </CardFooter>
        </Card>

    )
}