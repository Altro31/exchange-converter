import Code from "@/components/convert/codes/Code"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Code as CodeType } from "@/lib/types/Code"

interface Props {
    name: string
    codes: CodeType[]
}

export default function CodesDropdown({ name, codes }: Props) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    return (
        <div className="space-y-2">
            <Label htmlFor={name}>{capitalizedName}</Label>
            <Select name={name} required>
                <SelectTrigger id={name} aria-label={name}>
                    <SelectValue placeholder="Elige una moneda" />
                </SelectTrigger>
                <SelectContent className="max-h-80 min-w-96 p-2">
                    {codes.map(([code, name]) => (
                        <Code key={code} value={code}>
                            {code} - {name}
                        </Code>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
