import { useEffect, useState } from "react"

export function useFetchRateController(code?: string) {

    const [rates, setRates] = useState<Record<string, number>>({})

    useEffect(() => {
        async function getRate() {
            const res = await fetch("/api/rate/" + code, {
                cache: "force-cache",
            })
            const body = await res.json()
            setRates(body.data)
        }

        if (code) {
            getRate()
        }
    }, [code])

    return { rates }
}