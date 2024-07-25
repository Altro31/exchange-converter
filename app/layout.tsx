import { Nav } from "@/components/nav/Nav"
import "../globals.css"

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <html lang="en">
            <body className="flex h-screen flex-col items-center">
                <Nav />
                {children}
            </body>
        </html>
    )
}
