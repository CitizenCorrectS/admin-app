"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface CanvasContainerProps {
  children?: ReactNode
  className?: string
}

export function CanvasContainer({ children, className }: CanvasContainerProps) {
  const isMobile = useIsMobile()

  return (
    <div 
      className={cn(
        "absolute left-1/2 -translate-x-1/2 top-0 canvas-container",
        isMobile ? "h-screen w-[420px]" : "h-screen w-screen",
        className
      )}
    >
      {children}
    </div>
  )
}