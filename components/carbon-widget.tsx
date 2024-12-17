"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CarbonPriceData {
  price: number;
  timestamp: string;
  // Add other fields based on the actual API response
}

export const CarbonWidget = () => {
  const [data, setData] = useState<CarbonPriceData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('/api/carbon-prices')
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error('Error fetching carbon prices:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
    // Refresh every 5 minutes
    const interval = setInterval(fetchPrices, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <div className="animate-pulse">Loading carbon prices...</div>
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Live Carbon Prices</CardTitle>
      </CardHeader>
      <CardContent>
        {data ? (
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold">${data.price}</div>
            <div className="text-sm text-muted-foreground">
              Last updated: {new Date(data.timestamp).toLocaleString()}
            </div>
          </div>
        ) : (
          <div className="text-red-500">Failed to load carbon prices</div>
        )}
      </CardContent>
    </Card>
  )
}