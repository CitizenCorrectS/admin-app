"use client"
// components/Cube.tsx
import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

const Cube: React.FC<MeshProps> = (props) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta; // Rotate cube every frame
    }
  });

  return (
    <mesh ref={meshRef} {...props} castShadow position={[0, -2, 0]}>
      <boxGeometry args={[50, 50, 50]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Cube;