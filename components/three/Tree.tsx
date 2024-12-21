"use client";
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';

interface TreeProps {
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
  transition?: {
    duration: number;
    delay: number;
  };
}

const Tree: React.FC<TreeProps> = ({ 
  position = [0, -10, 0], 
  scale = 0.1, 
  rotation = [0, Math.PI / 1.33, 0],
  transition
}) => {
  const { scene } = useGLTF('/models/Tree.glb');
  const clonedScene = useMemo(() => {
    const cloned = scene.clone();
    cloned.scale.set(30 * scale, 30 * scale, 30 * scale);
    cloned.rotation.set(rotation[0], rotation[1], rotation[2]);
    cloned.position.set(position[0], position[1], position[2]);
    cloned.traverse((node: THREE.Object3D) => {
      if ((node as THREE.Mesh).isMesh) {
        (node as THREE.Mesh).castShadow = true;
        (node as THREE.Mesh).receiveShadow = true;
      }
    });
    return cloned;
  }, [scene, position, scale, rotation]);

  const meshRef = useRef<THREE.Mesh>(null);
  const targetScale = useRef(scale);
  const targetY = useRef(position[1]);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smooth scale animation
      meshRef.current.scale.lerp(
        new THREE.Vector3(
          30 * targetScale.current, 
          30 * targetScale.current, 
          30 * targetScale.current
        ),
        delta * 2
      );
      
      // Smooth position animation
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetY.current,
        delta * 2
      );
    }
  });

  useEffect(() => {
    targetScale.current = scale;
    targetY.current = position[1];
  }, [scale, position]);

  useEffect(() => {
    if (transition) {
      // Delay the scale transition
      setTimeout(() => {
        targetScale.current = scale;
      }, transition.delay * 1000);
    } else {
      targetScale.current = scale;
    }
  }, [scale, transition]);
   useFrame((state, delta) => {
    if (meshRef.current) {
      // Adjust lerp speed based on transition duration
      const lerpSpeed = transition ? 1 / (transition.duration * 60) : 2;
      meshRef.current.scale.lerp(
        new THREE.Vector3(
          30 * targetScale.current, 
          30 * targetScale.current, 
          30 * targetScale.current
        ),
        delta * lerpSpeed
      );
    }
  });
  
  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      rotation={rotation} 
      scale={[0.001, 0.001, 0.001]}
    >
      <primitive object={clonedScene} />
    </mesh>
  );
};

export default Tree;