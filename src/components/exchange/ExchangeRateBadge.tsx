import { Badge } from "@/components/ui/badge"
import { ExchangeRateValue } from "@/components/exchange/ExchangeRateValue"
import { ExchangeRateWrapper } from "./ExchangeRateWrapper"

interface Props {
    code: string
    value?: number
    name?: string
}

export function ExchangeRateBadge({ code, name }: Props) {
    return (
        <ExchangeRateWrapper name={name} code={code}>
            <Badge className="flex cursor-pointer justify-between bg-gray-200 py-0 pl-0">
                <Badge className="mr-2 py-1">
                    <span className="font-bold">{code}</span>
                </Badge>
                <ExchangeRateValue code={code} />
            </Badge>
        </ExchangeRateWrapper>
    )
}
