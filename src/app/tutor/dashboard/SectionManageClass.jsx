import CardClass from "@/components/block/tutor/CardClass"

export default function SectionManageClass() {
    return (
        <section>
            <h2 className="font-bold text-xl mb-4">Management Kelas</h2>
            <div className="grid grid-cols-3 gap-4">
                <CardClass />
                <CardClass />
                <CardClass />
                <CardClass />
            </div>
        </section>
    )
}