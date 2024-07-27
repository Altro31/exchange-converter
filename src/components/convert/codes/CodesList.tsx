import { getCachedCodes } from "@/server/queries/codes"
import { Code } from "@/components/convert/codes/Code"

export async function CodesList() {
    const codes = await getCachedCodes()
    return codes.map(([abr, name]) => (
        <Code value={abr} key={abr}>
            {abr} - {name}
        </Code>
    ))
}
