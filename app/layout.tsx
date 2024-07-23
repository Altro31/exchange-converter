import "../globals.css"

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <html lang="en">
            <body className="flex h-screen items-center">{children}</body>
        </html>
    )
}
