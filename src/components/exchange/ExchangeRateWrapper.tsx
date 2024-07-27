"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useSelectedCode } from "@/stores/selected-code"

interface Props {
    children: React.ReactNode
    name?: string
    code: string
}

export function ExchangeRateWrapper({ children, name, code }: Props) {
    const { setCode } = useSelectedCode()

    function handleClick() {
        setCode(code, name)
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger onClick={handleClick}>
                    {children}
                </TooltipTrigger>
                {name ? <TooltipContent>{name}</TooltipContent> : null}
            </Tooltip>
        </TooltipProvider>
    )
}
