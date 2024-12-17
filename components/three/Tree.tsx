"use client"
"use client"
import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';

const Tree: React.FC = () => {
  const { scene } = useGLTF('/models/Trees.glb');

  const clonedScene = useMemo(() => {
    const cloned = scene.clone();
    cloned.scale.set(10, 10, 10);
    // cloned.rotation.set(0, Math.PI / 2, 0);
    cloned.position.set(0, -32.3, 0);
    cloned.traverse((node: any) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
    return cloned;
  }, [scene]);

  return <primitive object={clonedScene} />;
};

export default Tree;