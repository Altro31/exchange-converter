"use client"

import { useSelectedCode } from "@/stores/selected-code"

interface Props {
    code: string
    name: string
}

export default function CodeInitializer({ code, name }: Props) {
    const { code: selectedCode, setCode } = useSelectedCode()

    if (!selectedCode) {
        setCode(code, name)
    }

    return null
}
