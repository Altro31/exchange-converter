"use server"

import { EXCHANGE_API_URL } from "@/lib/constants"
import { ConverterForm } from "@/lib/types/ConverterForm"

export async function convert(initialValue: ConverterForm, formData: FormData) {

    const from = formData.get("desde")!.toString()
    const to = formData.get("hasta")!.toString()
    const amount = Number(formData.get("amount")!.toString())

    const res = await fetch(`${EXCHANGE_API_URL}/pair/${from}/${to}/${amount}`, { cache: "force-cache" })

    const data = await res.json()

    const result: number = data.conversion_result

    return { from, to, amount, result } satisfies ConverterForm
}