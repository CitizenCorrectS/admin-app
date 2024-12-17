"use client"
import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'

interface ClientCanvasProps {
  children: ReactNode
}

export default function ClientCanvas({ children }: ClientCanvasProps) {
  return (
    <div className="canvas-container relative w-full h-full">
    <Canvas 
            camera={{ position: [72, -72, -128], fov: 75, near: 0.1, far: 1000 }} 
            shadows
            gl={{ preserveDrawingBuffer: true }}
            >
      {children}
    </Canvas>
    </div>
  )
}