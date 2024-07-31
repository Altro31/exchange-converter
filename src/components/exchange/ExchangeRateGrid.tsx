import { getCachedCodes } from "@/server/queries/codes"
import dynamic from "next/dynamic"
import CodeInitializer from "./CodeInitializer"
const ExchangeRateBadgeList = dynamic(
    () => import("@/components/exchange/ExchangeRateBadgeList"),
)

export default async function ExchangeRateGrid() {
    const codes = await getCachedCodes()
    const [firstCode, firstName] = codes[0]
    return (
        <>
            <CodeInitializer code={firstCode} name={firstName} />
            <ExchangeRateBadgeList codes={codes} />
        </>
    )
}
