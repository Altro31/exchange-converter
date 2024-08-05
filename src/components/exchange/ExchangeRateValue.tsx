"use client"

import { CompareIcon } from "@/components/icons/CompareIcon"

interface Props {
    rate?: number
}

export default function ExchangeRateValue({ rate }: Props) {
    return (
        <div className="flex items-center gap-1">
            <CompareIcon value={rate} />
            <span>{rate}</span>
        </div>
    )
}
