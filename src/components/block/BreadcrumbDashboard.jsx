import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function BreadcrumbDashboard({ data = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Components",
        link: "/components"
    },
    {
        name: "Breadcrumb",
        link: "/components/breadcrumb"
    }
] }) {

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {data.map((item, index) => (
                    <>
                        {index !== 0 && (
                            <BreadcrumbSeparator />
                        )}
                        <BreadcrumbItem>
                            <BreadcrumbLink href
                                ={item.link}>{item.name}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </>
                ))}
            </BreadcrumbList>
        </Breadcrumb>


    )

}