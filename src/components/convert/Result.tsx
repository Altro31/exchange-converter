"use client"

import { ConverterForm } from "@/lib/types/ConverterForm"

interface Props {
    state: ConverterForm
}

export function Result({ state }: Props) {
    return (
        state.result && (
            <div className="space-y-2 text-center">
                <p className="text-lg font-medium">
                    Resultado de la Conversión
                </p>
                <p className="text-2xl font-bold">
                    {state.amount} {state.from} = {state.result} {state.to}
                </p>
            </div>
        )
    )
}
