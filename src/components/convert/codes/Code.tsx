import { SelectItem } from "@/components/ui/select"

interface Props {
    children: React.ReactNode
    value: string
}

export function Code({ value, children }: Props) {
    return (
        <SelectItem
            value={value}
            className="order-3 cursor-pointer data-[state=checked]:order-2"
        >
            {children}
        </SelectItem>
    )
}
