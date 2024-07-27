import { create } from "zustand";

interface Exchange {
    amount?: number
    desde?: string
    hasta?: string
}

interface ExchangeStore extends Exchange {
    amount: number
    set: (input: Exchange) => void
}

const exchangeStore = create<ExchangeStore>((set) => ({
    amount: 0,
    desde: undefined,
    hasta: undefined,
    set: (input: Exchange) => set(input)
}))

export function useExchangeStore() {
    const amount = exchangeStore(state => state.amount)
    const desde = exchangeStore(state => state.desde)
    const hasta = exchangeStore(state => state.hasta)
    const setExchangeValues = exchangeStore(state => state.set)

    return { amount, desde, hasta, setExchangeValues }
}