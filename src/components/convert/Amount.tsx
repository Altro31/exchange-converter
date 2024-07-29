"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Amount() {
    return (
        <div className="space-y-2">
            <Label htmlFor="amount">Cantidad</Label>
            <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Inserte la cantidad"
            />
        </div>
    )
}
