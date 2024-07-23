"use client"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

export function ConvertButton() {
    const { pending } = useFormStatus()
    return (
        <Button type="submit" disabled={pending}>
            {pending ? <Loader2 className="mr-2 animate-spin" /> : null}
            {pending ? "Convirtiendo..." : "Convertir"}
        </Button>
    )
}
