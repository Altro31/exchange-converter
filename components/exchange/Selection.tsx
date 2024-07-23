import { Label } from "@/components/ui/label"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import { getCodes } from "@/server/queries/codes"

interface Props {
    name: string
}

export async function Selection({ name }: Props) {
    const codes = await getCodes()
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    return (
        <div className="space-y-2">
            <Label htmlFor={name}>{capitalizedName}</Label>
            <Select name={name}>
                <SelectTrigger id={name}>
                    <SelectValue placeholder="Elige una moneda" />
                </SelectTrigger>
                <SelectContent>
                    {codes.map(([abr, name]) => (
                        <SelectItem value={abr} key={abr}>
                            {abr} - {name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
