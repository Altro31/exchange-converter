import { ExchangeCurrentCodeName } from "./ExchangeCurrentCodeName"
import { ExchangeRateGrid } from "./ExchangeRateGrid"

export async function ExchangeInfoSection() {
    return (
        <section className="group/root my-12 w-3/4">
            <div className="p-8 text-center font-semibold leading-none tracking-tight">
                <h2 className="text-4xl">Tasa de Cambio</h2>
                <ExchangeCurrentCodeName className="text-2xl text-white/60" />
            </div>
            <ExchangeRateGrid />
        </section>
    )
}
