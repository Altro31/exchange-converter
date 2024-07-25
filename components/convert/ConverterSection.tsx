import { convert } from "@/actions/convert"
import { Amount } from "@/components/convert/Amount"
import { ConvertButton } from "@/components/convert/ConvertButton"
import { Result } from "@/components/convert/Result"
import { Selection } from "@/components/convert/Selection"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function ConverterSection() {
    return (
        <section className="w-full">
            <form className="w-full" action={convert}>
                <Card className="mx-auto w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Conversor de Monedas</CardTitle>
                        <CardDescription>
                            Convertir monedas nunca ha sido más fácil. Introduce
                            la cantidad y selecciona la moneda de origen y de
                            destino.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Selection name="desde" />
                                <Selection name="hasta" />
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
        </section>
    )
}
