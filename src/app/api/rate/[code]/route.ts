import { getExchangeRates } from "@/server/queries/exchange-rates";
import { NextRequest, NextResponse } from "next/server";

interface Params {
    params: {
        code: string
    }
}

export async function GET(req: NextRequest, { params: { code } }: Params) {

    return NextResponse.json({
        data: await getExchangeRates(code)
    })
}