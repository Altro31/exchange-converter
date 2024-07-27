"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useExchangeStore } from "@/stores/exchange-store"
import { useSearchParams } from "next/navigation"

export function Amount() {
    const { amount, setExchangeValues } = useExchangeStore()
    const searchParams = useSearchParams()
    return (
        <div className="space-y-2">
            <Label htmlFor="amount">Cantidad</Label>
            <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Inserte la cantidad"
                defaultValue={amount}
            />
        </div>
    )
}
