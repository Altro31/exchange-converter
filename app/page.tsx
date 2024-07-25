import { convert } from "@/actions/convert"
import { Amount } from "@/components/exchange/Amount"
import { ConvertButton } from "@/components/exchange/ConvertButton"
import { Result } from "@/components/exchange/Result"
import { Selection } from "@/components/exchange/Selection"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { SelectItem } from "@/components/ui/select"
import { getCodes } from "@/server/queries/codes"

export default async function ConverterPage() {
    const codes = await getCodes()

    const selectItmes = codes.map(([abr, name]) => (
        <SelectItem value={abr} key={abr}>
            {abr} - {name}
        </SelectItem>
    ))
    return (
        <form className="w-full" action={convert}>
            <Card className="mx-auto w-full max-w-md">
                <CardHeader>
                    <CardTitle>Conversor de Monedas</CardTitle>
                    <CardDescription>
                        Convertir monedas nunca ha sido más fácil. Introduce la
                        cantidad y selecciona la moneda de origen y de destino.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Selection name="desde">{selectItmes}</Selection>
                            <Selection name="hasta">{selectItmes}</Selection>
                        </div>
                        <Amount />
                        <ConvertButton />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Result />
                </CardFooter>
            </Card>
        </form>
    )
}
