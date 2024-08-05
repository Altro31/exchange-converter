import ExchangeRateGrid from "./ExchangeRateGrid"
import ExchangeSectionTitle from "./ExchangeSectionTitle"

export default async function ExchangeInfoSection() {
    return (
        <section className="group/root my-12 w-3/4">
            <ExchangeSectionTitle />
            <ExchangeRateGrid />
        </section>
    )
}
