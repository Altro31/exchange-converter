import { getCachedCodes } from "@/server/queries/codes";
import { NextResponse } from "next/server";

export async function GET() {
    return new NextResponse(JSON.stringify(await getCachedCodes()));
}