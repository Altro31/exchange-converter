import { FLAGS_API_URL } from "@/lib/constants";
import { NextRequest } from "next/server";

interface Params {
    params: {
        code: string;
    }
}

export async function GET(req: NextRequest, { params }: Params) {
    return fetch(`${FLAGS_API_URL}/${params.code}/flat/48.png`, { cache: "force-cache" })
}