"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const vertexShader = `
  uniform float growthFactor;
  void main() {
    vec3 transformed = position;
    transformed.y *= growthFactor; // Scale height based on growth
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
`;

const fragmentShader = `
  void main() {
    gl_FragColor = vec4(0.2, 0.8, 0.2, 1.0); // Green tree color
  }
`;

const TreeShader = ({ sliderValue }: { sliderValue: number }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.growthFactor.value = sliderValue / 100;
    }
  });

  return (
    <mesh>
      <cylinderGeometry args={[0.1, 0.2, 1, 8]} /> {/* Tree trunk */}
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          growthFactor: { value: sliderValue / 100 },
        }}
      />
    </mesh>
  );
};

const TreesAni = () => {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <>
      
      <Canvas>
        <ambientLight />
        <TreeShader sliderValue={sliderValue} />
      </Canvas>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
      />
    </>
  );
};

export default TreesAni;
