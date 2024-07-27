"use client"

import { convert } from "@/server/actions/convert"
import { Button } from "@/components/ui/button"
import { useExchangeStore } from "@/stores/exchange-store"
import { Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

export function ConvertButton() {
    const { pending } = useFormStatus()

    const { setExchangeValues } = useExchangeStore()

    async function handleChange(formData: FormData) {
        await convert(formData)
        setExchangeValues({
            amount: Number(formData?.get("amount")) ?? 0,
            desde: formData?.get("desde") as string,
            hasta: formData?.get("hasta") as string,
        })
    }

    return (
        <Button type="submit" disabled={pending} formAction={handleChange}>
            {pending ? <Loader2 className="mr-2 animate-spin" /> : null}
            {pending ? "Convirtiendo..." : "Convertir"}
        </Button>
    )
}
