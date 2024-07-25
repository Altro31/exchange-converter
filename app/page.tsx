import { ConverterSection } from "@/components/convert/ConverterSection"
import { ExchangeInfoSection } from "@/components/exchange/ExchangeInfoSection"
import { getCodes } from "@/server/queries/codes"

export default async function ConverterPage() {
    const codes = await getCodes()

    return (
        <>
            <ConverterSection codes={codes} />
            <ExchangeInfoSection />
        </>
    )
}
