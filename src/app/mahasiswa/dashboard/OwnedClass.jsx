import CardOwnedClass from "./CardOwnedClass";

export default function OwnedClass() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <CardOwnedClass />
            <CardOwnedClass />
            <CardOwnedClass />
            <CardOwnedClass />
            <CardOwnedClass />
        </div>
    )
}