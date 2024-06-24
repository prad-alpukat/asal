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
import { formatPrice } from "@/lib/utils"

export default function CardExploreClass({ id = "test", title = "Card Title", description = "Card Description", price = 40_000 }) {
    return (
        <Card className="w-full overflow-hidden">
            <Image src={CardImage} alt="random image" className="w-full h-44 object-cover" />
            <CardHeader>
                <CardTitle>{formatPrice(price)}</CardTitle>
                <h6 className="font-bold">{title}</h6>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
                <Link href={`/mahasiswa/dashboard/explore-class/${id}`}>
                    <Button variant="outline">Detail</Button>
                </Link>
                <Link href={`/mahasiswa/dashboard/explore-class/${id}/payment`}>
                    <Button>Beli</Button>
                </Link>
            </CardFooter>
        </Card>

    )
}