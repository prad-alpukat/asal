import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WalletCard() {
    return (
        <Card>
            <CardHeader>
                <CardDescription>Dompet Tutor:</CardDescription>
                <CardTitle>Rp 450.000</CardTitle>
            </CardHeader>
            <CardFooter>
                <Link href={"/tutor/dashboard/withdraw"}>
                    <Button>Withdraw</Button>
                </Link>
            </CardFooter>
        </Card>

    )
}