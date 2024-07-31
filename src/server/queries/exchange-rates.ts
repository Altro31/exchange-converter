import { EXCHANGE_API_URL } from "@/lib/constants";
import { unstable_cache } from "next/cache";

export async function getExchangeRates(code: string) {
    const res = await fetch(`${EXCHANGE_API_URL}/latest/${code}`, { next: { revalidate: 24 * 60 * 60 } })
    const body = await res.json()
    return body.conversion_rates as Record<string, number>
}

export const getCachedExchangeRates = unstable_cache(getExchangeRates, ["exchange-rates"], { revalidate: 24 * 60 * 60 })