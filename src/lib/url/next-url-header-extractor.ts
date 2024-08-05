import { headers } from "next/headers";

export function nextURLHeaderExtractor() {
    const heads = headers()
    const referer = heads.get("referer")!
    const url = decodeURIComponent(referer)
    return new URL(url)
}