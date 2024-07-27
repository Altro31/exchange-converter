import { getExchangeRates } from "@/server/queries/exchange-rates";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const code = searchParams.get("code")

    if (!code) {
        return NextResponse.json({
            error: "Missing 'code' query parameter",
            status: 400
        })
    }

    return NextResponse.json({
        data: await getExchangeRates(code)
    })
}