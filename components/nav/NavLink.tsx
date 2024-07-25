import Link from "next/link"

interface Props {
    children?: React.ReactNode
    to: string
}

export function NavLink({ children, to }: Props) {
    return (
        <div>
            <Link
                href={to}
                className="rounded-lg px-4 py-2 hover:bg-gray-200/50"
            >
                {children}
            </Link>
        </div>
    )
}
