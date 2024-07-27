import { create } from "zustand";

interface SelectedCodeStoreType {
    code?: string,
    name?: string,
    setCode: (code: string, name?: string) => void
}

const selectedCodeStore = create<SelectedCodeStoreType>(set => ({
    code: undefined,
    name: undefined,
    setCode: (code, name?) => set({ code, name })
}))

export function useSelectedCode() {
    const code = selectedCodeStore(state => state.code)
    const name = selectedCodeStore(state => state.name)
    const setCode = selectedCodeStore(state => state.setCode)
    return { code, name, setCode }
}