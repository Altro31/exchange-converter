import { ExchangeRateBadgeCheck } from "@/components/exchange/ExchangeRateBadgeCheck"
import { ExchangeRateValue } from "@/components/exchange/ExchangeRateValue"
import { Badge } from "@/components/ui/badge"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface Props {
    code: string
    value?: number
    name?: string
}

export function ExchangeRateBadge({ code, name }: Props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <label>
                        <ExchangeRateBadgeCheck code={code} name={name} />
                        <Badge className="flex cursor-pointer justify-between bg-gray-200 py-0 pl-0 peer-checked:bg-gray-700">
                            <Badge className="mr-2 py-1">
                                <span className="font-bold">{code}</span>
                            </Badge>
                            <ExchangeRateValue code={code} />
                        </Badge>
                    </label>
                </TooltipTrigger>
                {name ? <TooltipContent>{name}</TooltipContent> : null}
            </Tooltip>
        </TooltipProvider>
    )
}
