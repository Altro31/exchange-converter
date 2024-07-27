import { API_URL } from "@/lib/constants";
import { unstable_cache } from "next/cache";

export async function getExchangeRates(code: string) {
    const res = await fetch(`${API_URL}/latest/${code}`)
    const body = await res.json()
    return body.conversion_rates as Record<string, number>
}

export const getCachedExchangeRates = unstable_cache(getExchangeRates, ["exchange-rates"])