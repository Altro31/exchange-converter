"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSearchParams } from "next/navigation"

export function Amount() {
    const searchParams = useSearchParams()
    const value = searchParams.get("amount")

    return (
        <div className="space-y-2">
            <Label htmlFor="amount">Cantidad</Label>
            <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Inserte la cantidad"
                defaultValue={value ?? 0}
            />
        </div>
    )
}
