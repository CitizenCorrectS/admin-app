'use client'
import React from 'react'
import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useSearchParams } from 'next/navigation'
import AppHeader from "../../../_components/app-header";
import { SidebarInset } from "@/components/ui/sidebar"
import ShadowAnalysis from '../../../_components/shadow-analysis'




const AnalysisPage = () => {


  return (
    <>
    <SidebarInset>
          <AppHeader />
          {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0"> */}
            <ShadowAnalysis />
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3"> */}
          {/* </div> */}
          {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
        {/* </div> */}
  </SidebarInset>
  </>
  )
}

export default AnalysisPage;