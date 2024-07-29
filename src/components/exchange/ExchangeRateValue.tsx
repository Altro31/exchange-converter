"use client"

import { CompareIcon } from "@/components/icons/CompareIcon"
import { LoadingIcon } from "@/components/icons/LoadingIcon"
import { useSelectedCode } from "@/stores/selected-code"
import { useEffect, useState } from "react"

export function ExchangeRateValue({ code }: { code: string }) {
    const { code: selectedCode } = useSelectedCode()
    const [rate, setRate] = useState<number | undefined>()

    useEffect(() => {
        async function getRate() {
            const res = await fetch("/api/rate/" + selectedCode, {
                cache: "force-cache",
            })
            const body = await res.json()
            setRate(body.data[code])
        }

        if (selectedCode) {
            getRate()
        }
    }, [selectedCode])

    return (
        <div className="flex items-center gap-1">
            {rate && selectedCode ? (
                <>
                    <CompareIcon value={rate} />
                    <span>{rate}</span>
                </>
            ) : (
                <LoadingIcon />
            )}
        </div>
    )
}
