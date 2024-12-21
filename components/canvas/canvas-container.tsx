"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface CanvasContainerProps {
  children?: ReactNode
  className?: string
}

// export function CanvasContainer({ children, className }: CanvasContainerProps) {
//   const isMobile = useIsMobile()

//   return (
//     <div 
//       className={cn(
//         "absolute left-1/2 -translate-x-1/2 top-[20px] canvas-container z-[-10]",
//         isMobile ? "h-[45vh] w-[100vh]" : "h-[30vh] w-[90vh]",
//         className
//       )}
//     >
//       {children}
//     </div>
//   )
// }


export function CanvasContainer({ children, className }: CanvasContainerProps) {
  const isMobile = useIsMobile()

  return (
    <div 
      className={cn(
        "absolute top-1/2 flex flex-col items-center z-[-10]",
        isMobile ? "h-[45vh] w-[100vh]" : "h-[60vh] w-[90vh]",
        className
      )}
    >
      {children}
    </div>
  )
}