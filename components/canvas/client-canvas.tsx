"use client"

import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

interface ClientCanvasProps {
  children: ReactNode
}

export default function ClientCanvas({ children }: ClientCanvasProps) {
  const isMobile = useIsMobile()
  
  return (
    <div className="canvas-container relative w-full h-full">
      <Canvas 
        camera={{ 
          position: isMobile ? [66, -66, -64] : [-72, 128, 72], 
          fov: isMobile ? 85 : 75, 
          near: 0.1, 
          far: 1000 
        }} 
        shadows
        gl={{ preserveDrawingBuffer: true }}
      >
        {children}
        <ambientLight intensity={0.5} />
        {/* <directionalLight position={[10, 10, 10]} intensity={1} /> */}
      </Canvas>
    </div>
  )
}