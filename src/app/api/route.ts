import { NextResponse } from "next/server";

import data from "@/lib/data.json";

// Fake data request

export async function GET(request: Request) {
  return NextResponse.json({ data });
}
