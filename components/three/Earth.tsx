"use client"
// components/Cube.tsx
import { MeshProps, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, TextureLoader } from 'three';

const Earth: React.FC = () => {
  // const texture = new TextureLoader().load('/earth/earth.jpg');
  // const specularClouds = new TextureLoader().load('/earth/disp.jpg');

  // const earthTexture = useLoader(TextureLoader, '/earth/day.jpg')

  const [colorMap, displacementMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
    '/earth/day.jpg',
    '/earth/disp.png',
    '/earth/earthNormal.jpg',
    '/earth/specularClouds.jpg',
  ])


  return (
    <mesh rotation={[Math.PI/2, Math.PI/2 , Math.PI/1.2]}>
      <sphereGeometry args={[32, 64, 64]} />
      <meshStandardMaterial 
      displacementScale={2}
      map={colorMap}
      displacementMap={displacementMap}
      normalMap={normalMap}
      roughnessMap={roughnessMap}
      />
    </mesh>
  );
};

export default Earth;
