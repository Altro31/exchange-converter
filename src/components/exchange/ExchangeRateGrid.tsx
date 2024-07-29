import { CodeInitializer } from "@/components/exchange/CodeInitializer"
import { ExchangeRateBadge } from "@/components/exchange/ExchangeRateBadge"
import { getCachedCodes } from "@/server/queries/codes"

export async function ExchangeRateGrid() {
    const codes = await getCachedCodes()
    const [firstCode, firstName] = codes[0]
    return (
        <>
            <CodeInitializer code={firstCode} name={firstName} />
            <div className="flex flex-wrap justify-center gap-3">
                {codes.map(([code, name]) => (
                    <ExchangeRateBadge code={code} key={code} name={name} />
                ))}
            </div>
        </>
    )
}
