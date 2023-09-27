import { NextResponse } from "next/server";

import data from "@/lib/data.json";

// Fake data request

export async function GET(request: Request) {
  
  // fetch from the Django rest api
  const res = await fetch('http://localhost:8000')
  const resData = await res.json()

  // TODO: swap data with resData after seeding more data in the admin ui
  return NextResponse.json(data);
}
