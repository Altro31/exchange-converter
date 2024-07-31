"use client"

import Amount from "@/components/convert/Amount"
import ConvertButton from "@/components/convert/ConvertButton"
import Result from "@/components/convert/Result"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Code } from "@/lib/types/Code"
import { ConverterForm as ConverterFormType } from "@/lib/types/ConverterForm"
import { convert } from "@/server/actions/convert"
import dynamic from "next/dynamic"
import { useFormState } from "react-dom"

const CodesDropdown = dynamic(
    () => import("@/components/convert/codes/CodesDropdown"),
)

const initialState: ConverterFormType = {
    from: "",
    to: "",
    amount: 0,
}

interface Props {
    codes: Code[]
}

export default function ConverterForm({ codes }: Props) {
    const [state, action] = useFormState(convert, initialState)
    return (
        <form action={action}>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <CodesDropdown name="desde" codes={codes} />
                        <CodesDropdown name="hasta" codes={codes} />
                    </div>
                    <Amount />
                    <ConvertButton />
                </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Result state={state} />
            </CardFooter>
        </form>
    )
}
