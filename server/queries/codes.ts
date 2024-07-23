import { API_URL } from "@/lib/constants";
import { Code } from "@/lib/types/Code";

export async function getCodes(): Promise<Code[]> {

    const res = await fetch(API_URL + "/codes", { cache: "force-cache" })
    const data = await res.json()
    return data["supported_codes"]
}