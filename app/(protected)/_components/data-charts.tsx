"use client"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { HourMonth } from "./hour-month"
import  Emicalc from "./ui/emicalc"


export function DataCharts() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-[600px] mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">🔆Sunlight Hours</TabsTrigger>
        <TabsTrigger value="password">⚡Energy Savings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
            <HourMonth />
      </TabsContent>
      <TabsContent value="password">
        <Emicalc />
      </TabsContent>
    </Tabs>
  )
}
