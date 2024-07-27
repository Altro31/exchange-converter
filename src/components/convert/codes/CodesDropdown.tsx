import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CodesList } from "@/components/convert/codes/CodesList"
import { Suspense } from "react"

interface Props {
    name: string
}

export async function CodesDropdown({ name }: Props) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    return (
        <div className="space-y-2">
            <Label htmlFor={name}>{capitalizedName}</Label>
            <Select name={name}>
                <SelectTrigger id={name}>
                    <SelectValue placeholder="Elige una moneda" />
                </SelectTrigger>
                <SelectContent className="h-72 rounded-md">
                    <Suspense fallback={"Cargando..."}>
                        <CodesList />
                    </Suspense>
                </SelectContent>
            </Select>
        </div>
    )
}
