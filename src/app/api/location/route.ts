import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://ipwho.is/");

  const data = await response.json();

  return NextResponse.json({
    city: data.city,
    region: data.region,
    country: data.country,
  });
}