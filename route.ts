// Public routes
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://carboncredits.com/live-carbon-prices/index.js.php', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    
    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching carbon prices:', error)
    return NextResponse.json({ error: 'Failed to fetch carbon prices' }, { status: 500 })
  }
}

export const publicRoutes = [
    "/",
    "/auth/new-verification"
];

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error"
];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";