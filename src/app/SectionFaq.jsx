import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function SectionFaq() {
    return (
        <section id="faq">
            <div className="container py-20">
                <div className="max-w-screen-sm mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2">Butuh bantuan?</h2>
                        <p>
                            Cari tahu jawaban dari pertanyaanmu di sini!
                        </p>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Bagaimana cara mendaftar kelas Techtutoringits?
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur. Libero non diam velit maecenas mus lectus. Bibendum nisl non fames consectetur. Integer pellentesque dictum turpis amet nascetur ipsum amet curabitur duis. Risus nisl faucibus nec vitae sit orci amet in. Id at urna at massa pretium pellentesque quam. Tortor eget a blandit nullam. Non eget bibendum ultrices orci viverra orci vitae turpis ut. Tempor aliquam nulla orci mauris commodo. Felis amet tempor quis quam.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                Bagaimana cara mendaftar kelas Techtutoringits?
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur. Libero non diam velit maecenas mus lectus. Bibendum nisl non fames consectetur. Integer pellentesque dictum turpis amet nascetur ipsum amet curabitur duis. Risus nisl faucibus nec vitae sit orci amet in. Id at urna at massa pretium pellentesque quam. Tortor eget a blandit nullam. Non eget bibendum ultrices orci viverra orci vitae turpis ut. Tempor aliquam nulla orci mauris commodo. Felis amet tempor quis quam.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                Bagaimana cara mendaftar kelas Techtutoringits?
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur. Libero non diam velit maecenas mus lectus. Bibendum nisl non fames consectetur. Integer pellentesque dictum turpis amet nascetur ipsum amet curabitur duis. Risus nisl faucibus nec vitae sit orci amet in. Id at urna at massa pretium pellentesque quam. Tortor eget a blandit nullam. Non eget bibendum ultrices orci viverra orci vitae turpis ut. Tempor aliquam nulla orci mauris commodo. Felis amet tempor quis quam.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}