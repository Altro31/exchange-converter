"use client"

import { useSelectedCode } from "@/stores/selected-code"

interface Props {
    className?: string
}

export function ExchangeCurrentCodeName({ className }: Props) {
    const { name, code } = useSelectedCode()
    return (
        <h3
            data-animate={code}
            className={`opacity-0 transition-opacity delay-200 data-[animate]:opacity-100 ${className}`}
        >
            {code} - {name}
        </h3>
    )
}
