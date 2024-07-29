"use client"

import { useSelectedCode } from "@/stores/selected-code"

interface Props {
    code: string
    name?: string
}

export function ExchangeRateBadgeCheck({ code, name }: Props) {
    const { setCode } = useSelectedCode()

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement
        if (target.checked) {
            setCode(code, name)
        }
    }

    return (
        <input
            type="radio"
            name="code"
            className="peer hidden"
            onChange={handleChange}
        />
    )
}
