import { SelectItem } from "@/components/ui/select"

interface Props {
    children: React.ReactNode
    value: string
}

export function Code({ value, children }: Props) {
    return (
        <SelectItem value={value} className="cursor-pointer">
            {children}
        </SelectItem>
    )
}
