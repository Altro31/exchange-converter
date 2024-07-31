import { Nav } from "@/components/nav/Nav"
import { ViewTransitions } from "next-view-transitions"
import "../../globals.css"
import { Metadata } from "next"

interface Props {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Echange Converter",
    description:
        "App para convertir monedas de países, obtener información sobre estas y hacer comparaciones",
}

export default function Layout({ children }: Props) {
    return (
        <ViewTransitions>
            <html lang="en" className="dark">
                <body className="flex h-screen flex-col items-center dark:bg-[--background]">
                    <Nav />
                    {children}
                </body>
            </html>
        </ViewTransitions>
    )
}
