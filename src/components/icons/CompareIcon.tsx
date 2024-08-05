import { CompareDownArrow } from "./CompareDownArrow"
import { CompareUpArrow } from "./CompareUpArrow"

interface Props {
    value?: number
}

export function CompareIcon({ value }: Props) {
    if (typeof value !== "number") {
        return null
    }

    if (value > 1) {
        return <CompareUpArrow className="text-green-700" />
    }

    if (value < 1) {
        return <CompareDownArrow className="text-red-700" />
    }

    return (
        <Circle>
            <Circle className="animate-ping" />
        </Circle>
    )
}

interface CircleProps {
    children?: React.ReactNode
    className?: string
}

function Circle({ children, className }: CircleProps) {
    return (
        <div className={`size-2 rounded-full bg-yellow-600 ${className}`}>
            {children}
        </div>
    )
}
