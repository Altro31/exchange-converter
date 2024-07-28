import { EXCHANGE_API_URL } from "@/lib/constants";
import { Code } from "@/lib/types/Code";
import { unstable_cache } from "next/cache";

export async function getCodes() {
    const res = await fetch(EXCHANGE_API_URL + "/codes", { cache: "force-cache" })
    const data = await res.json()
    const codes: Code[] = data["supported_codes"]
    return codes.sort(([abr1, _], [abr2, __]) => abr1.localeCompare(abr2))
}

export const getCachedCodes = unstable_cache(getCodes, ["codes"])