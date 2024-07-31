"use client"

import { useFetchRateController } from "@/lib/hooks/fetch-rate-controller"
import { Code } from "@/lib/types/Code"
import ExchangeRateBadge from "./ExchangeRateBadge"
import { useSelectedCode } from "@/stores/selected-code"

interface Props {
    codes: Code[]
}

export default function ExchangeRateBadgeList({ codes }: Props) {
    const { code: selectedCode } = useSelectedCode()
    const { rates } = useFetchRateController(selectedCode)

    return (
        <div className="mx-auto flex flex-wrap">
            {codes.map(([code, name]) => (
                <ExchangeRateBadge
                    code={code}
                    key={code}
                    name={name}
                    rate={rates[code]}
                />
            ))}
        </div>
    )
}
