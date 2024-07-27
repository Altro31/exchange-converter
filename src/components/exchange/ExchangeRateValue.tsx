"use client"

import { useSelectedCode } from "@/stores/selected-code"
import { useEffect, useState } from "react"
import { CompareIcon } from "../icons/CompareIcon"
import { LoadingIcon } from "../icons/LoadingIcon"

export function ExchangeRateValue({ code }: { code: string }) {
    const { code: selectedCode } = useSelectedCode()
    const [rate, setRate] = useState<number | undefined>()

    useEffect(() => {
        if (selectedCode) {
            fetch("/api/rate?code=" + selectedCode, {
                cache: "force-cache",
            }).then((res) =>
                res.json().then((res) => {
                    setRate(res.data[code])
                }),
            )
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
