// import { NextResponse } from "next/server";

// export async function GET() {
//   const response = await fetch("https://ipwho.is/");

//   const data = await response.json();

//   return NextResponse.json({
//     city: data.city,
//     region: data.region,
//     country: data.country,
//   });
// }
import { toNextJsHandler } from 'better-auth/next-js'
import { auth } from '@/lib/auth'

const handler = toNextJsHandler(auth)

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://ozon3-nine.vercel.app',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  })
}

export async function GET(request: Request) {
  const response = await handler.GET(request)

  const headers = new Headers(response.headers)

  Object.entries(corsHeaders).forEach(([key, value]) => {
    headers.set(key, value)
  })

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

export async function POST(request: Request) {
  const response = await handler.POST(request)

  const headers = new Headers(response.headers)

  Object.entries(corsHeaders).forEach(([key, value]) => {
    headers.set(key, value)
  })

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}