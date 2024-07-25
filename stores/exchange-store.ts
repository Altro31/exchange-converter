import { create } from "zustand";

interface ExchangeStore {
    amount: number
    desde?: string
    hasta?: string
    set: () => void
}

const exchangeStore = create<ExchangeStore>((set) => ({
    amount: 0,
    desde: undefined,
    hasta: undefined,
    set: ()
}))