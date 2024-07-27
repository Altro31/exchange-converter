import { Nav } from "@/components/nav/Nav"
import "../../globals.css"

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <html lang="en" className="dark">
            <body className="flex h-screen flex-col items-center dark:bg-black/95">
                <Nav />
                {children}
            </body>
        </html>
    )
}
