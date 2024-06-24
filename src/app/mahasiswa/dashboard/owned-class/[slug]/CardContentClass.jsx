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


export default function CardContentClass({ judul = "Card Title", deskripsi = "Card Description" }) {
    return (
        <Card className="flex">
            <Image src={CardImage} className="h-full w-auto" />
            <CardHeader>
                <CardTitle>{judul}</CardTitle>
                <CardDescription>{deskripsi}</CardDescription>
            </CardHeader>
        </Card>

    )
}