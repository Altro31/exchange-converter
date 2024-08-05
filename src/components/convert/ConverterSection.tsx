import ConverterForm from "@/components/convert/form/ConverterForm"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { getCachedCodes } from "@/server/queries/codes"

export default async function ConverterSection() {
    const codes = await getCachedCodes()
    return (
        <section className="w-full">
            <Card className="mx-auto w-full max-w-md dark:bg-black/50">
                <CardHeader>
                    <CardTitle>Conversor de Monedas</CardTitle>
                    <CardDescription>
                        Convertir monedas nunca ha sido más fácil. Introduce la
                        cantidad y selecciona la moneda de origen y de destino.
                    </CardDescription>
                </CardHeader>
                <ConverterForm codes={codes} />
            </Card>
        </section>
    )
}
