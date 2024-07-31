"use client"

import ExchangeRateBadgeCheck from "@/components/exchange/ExchangeRateBadgeCheck"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import LineExtender from "../ui/line-extender"
import { CompareIcon } from "../icons/CompareIcon"
import { useSelectedCode } from "@/stores/selected-code"

interface Props {
    code: string
    value?: number
    name?: string
    rate?: number
}

export default function ExchangeRateBadge({ code, name, rate }: Props) {
    return rate ? (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <label className="group/label group/line relative min-w-24 flex-1 cursor-pointer border border-white/5 border-l-transparent p-2 transition-colors hover:bg-white/5">
                        <ExchangeRateBadgeCheck code={code} name={name} />
                        <div className="flex items-center gap-2">
                            <div className="text-lg font-medium">{code}</div>
                            <CompareIcon value={rate} />
                        </div>
                        <div className="text-sm text-gray-300/80">$ {rate}</div>
                        <LineExtender />
                    </label>
                </TooltipTrigger>
                {name ? <TooltipContent>{name}</TooltipContent> : null}
            </Tooltip>
        </TooltipProvider>
    ) : null
}
