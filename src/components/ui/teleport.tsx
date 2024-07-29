"use client"

import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

interface Props {
    children?: React.ReactNode
    containerId: string
}

export function Teleport({ children, containerId }: Props) {
    const containerRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        containerRef.current = document.getElementById(containerId)
    })

    return containerRef.current
        ? createPortal(children, containerRef.current)
        : null
}
