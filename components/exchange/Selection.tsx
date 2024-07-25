"use client"

import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { useSearchParams } from "next/navigation"

interface Props {
    name: string
    children: React.ReactNode
}

export function Selection({ name, children }: Props) {
    const searchParams = useSearchParams()
    const value = searchParams.get(name)
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <div className="space-y-2">
            <Label htmlFor={name}>{capitalizedName}</Label>
            <Select name={name}>
                <SelectTrigger id={name}>
                    <SelectValue placeholder="Elige una moneda" />
                </SelectTrigger>
                <SelectContent>{children}</SelectContent>
            </Select>
        </div>
    )
}
