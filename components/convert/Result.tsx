"use client"

import { useSearchParams } from "next/navigation"

export function Result() {
    const searchParams = useSearchParams()
    const value = searchParams.get("value")
    const amount = searchParams.get("amount")
    const desde = searchParams.get("from")
    const hasta = searchParams.get("to")
    return (
        value && (
            <div className="space-y-2 text-center">
                <p className="text-lg font-medium">
                    Resultado de la Conversión
                </p>
                <p className="text-2xl font-bold">
                    {amount} {desde} = {value} {hasta}
                </p>
            </div>
        )
    )
}
