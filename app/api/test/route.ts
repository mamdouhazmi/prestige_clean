import { NextResponse } from 'next/server'

export async function GET() {
  console.log('API route hit') // Add this for debugging
  return NextResponse.json({ message: 'Hello from the API' })
}
