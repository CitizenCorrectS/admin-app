"use client";
import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { InstancedMesh, BoxGeometry, MeshStandardMaterial } from "three";
import Tree from "./Tree";

const Trees = ({ sliderValue }: { sliderValue: number }) => {
  const meshRef = useRef<InstancedMesh>(null!);

  useFrame(() => {
    const count = Math.floor(sliderValue);
    const scaleFactor = sliderValue / 100;
    for (let i = 0; i < count; i++) {
      const scale = scaleFactor * Math.random(); // Randomized scale for variation
      const matrix = new THREE.Matrix4().makeScale(scale, scale, scale);
      meshRef.current.setMatrixAt(i, matrix);
    }
    meshRef.current.count = count;
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      
    <instancedMesh ref={meshRef} args={[new BoxGeometry(), new MeshStandardMaterial(), 100]}>
      {/* Geometry and material define tree appearance */}
      {/* <Tree /> */}
      {/* <boxGeometry args={[10,10,10]} /> */}
    </instancedMesh>
    </>
  );
};

export default Trees;