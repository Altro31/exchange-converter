"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent } from "react"
import { z } from "zod"

const schema = z
    .number({ message: "La cantidad debe ser un número" })
    .min(0, { message: "La cantidad debe ser mayor o igual a 0" })

function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    schema.parse(Number(value))
}

export default function Amount() {
    return (
        <div className="space-y-2">
            <Label htmlFor="amount">Cantidad</Label>
            <Input
                id="amount"
                name="amount"
                type="text"
                placeholder="Inserte la cantidad"
                min="0"
                onChange={handleChange}
            />
        </div>
    )
}
