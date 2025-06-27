import { NextRequest, NextResponse } from "next/server";

export function adminMiddleware(request: NextRequest) {
    return NextResponse.next();
}