import { CodeInitializer } from "@/components/exchange/CodeInitializer"
import { ExchangeRateBadge } from "@/components/exchange/ExchangeRateBadge"
import { getCachedCodes } from "@/server/queries/codes"
import { getCachedExchangeRates } from "@/server/queries/exchange-rates"

export async function ExchangeRateGrid() {
    const codes = await getCachedCodes()
    const taxes = await getCachedExchangeRates("USD")
    return (
        <>
            <CodeInitializer code={codes[0][0]} name={codes[0][1]} />
            <div className="flex flex-wrap justify-center gap-3">
                {codes.map(([code, name]) => (
                    <ExchangeRateBadge code={code} key={code} name={name} />
                ))}
            </div>
        </>
    )
}
