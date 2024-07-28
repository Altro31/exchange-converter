import { CodesList } from "@/components/convert/codes/CodesList"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getCachedCodes } from "@/server/queries/codes"
import { Suspense } from "react"

interface Props {
    name: string
}

export async function CodesDropdown({ name }: Props) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    const codes = await getCachedCodes()
    return (
        <div className="space-y-2">
            <Label htmlFor={name}>{capitalizedName}</Label>
            <Select name={name}>
                <SelectTrigger id={name}>
                    <SelectValue placeholder="Elige una moneda" />
                </SelectTrigger>
                <CodesList codes={codes} />
            </Select>
        </div>
    )
}
