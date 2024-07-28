"use client"

import { SelectContent } from "@/components/ui/select"
import { Code as CodeType } from "@/lib/types/Code"
import React, { useRef } from "react"
import { ViewportList } from "react-viewport-list"
import { Code } from "./Code"

interface Props {
    codes: CodeType[]
    children?: React.ReactNode
}

export function CodesList({ codes, children }: Props) {
    const viewportRef = useRef(null)
    return (
        <SelectContent className="max-h-80 min-w-96 p-2" ref={viewportRef}>
            <ViewportList viewportRef={viewportRef} items={codes}>
                {([code, name]) => (
                    <Code key={code} value={code}>
                        {code} - {name}
                    </Code>
                )}
            </ViewportList>
        </SelectContent>
    )
}
