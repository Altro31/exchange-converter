"use server"

import { API_URL } from "@/lib/constants"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export async function convert(formData: FormData) {
    const desde = formData.get("desde")
    const hasta = formData.get("hasta")
    const amount = formData.get("amount")

    const res = await fetch(`${API_URL}/pair/${desde}/${hasta}/${amount}`, { cache: "force-cache" })
    console.log(res);


    const data = await res.json()

    const value = data.conversion_result

    redirect(`/?from=${desde}&to=${hasta}&amount=${amount}&value=${value}`)
}