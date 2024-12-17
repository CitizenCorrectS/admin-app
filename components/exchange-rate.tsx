"use client"

import { useEffect, useState } from 'react'

interface ExchangeRateData {
  result: string;
  time_last_update_utc: string;
  rates: {
    USD: number;
  };
}

export const ExchangeRate = () => {
  const [data, setData] = useState<ExchangeRateData | null>(null)

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD')
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error('Error fetching exchange rate:', error)
      }
    }

    fetchRate()
  }, [])

  if (!data) return <p className="text-md text-gray-400">Loading...</p>

  return (
    <>
        <h1 className="text-6xl">{data.rates.USD} </h1>
        <p className="text-md text-gray-400">
        {data.time_last_update_utc} · Disclaimer
        </p>
    </>
  )
}