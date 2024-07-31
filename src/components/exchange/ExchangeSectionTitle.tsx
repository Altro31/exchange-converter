import ExchangeCurrentCodeName from "./ExchangeCurrentCodeName"

export default function ExchangeSectionTitle() {
    return (
        <div className="sticky left-0 top-0 z-10 from-60% p-8 text-center font-semibold leading-none tracking-tight dark:bg-gradient-to-b dark:from-[--background]">
            <h2 className="text-4xl">Tasa de Cambio</h2>
            <ExchangeCurrentCodeName className="text-2xl text-white/60" />
        </div>
    )
}
