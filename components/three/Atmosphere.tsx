"use client"
import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Mesh, TextureLoader, SRGBColorSpace, ShaderMaterial, Color, BackSide, Uniform, Euler } from 'three';
import { useSlider } from '@/components/slider-context';
// Textures
const textureLoader = new TextureLoader();
const earthDayTexture = textureLoader.load('/earth/day.jpg');
earthDayTexture.colorSpace = SRGBColorSpace;
earthDayTexture.anisotropy = 8;

const earthNightTexture = textureLoader.load('/earth/night.jpg');
earthNightTexture.colorSpace = SRGBColorSpace;
earthNightTexture.anisotropy = 8;

const earthSpecularCloudsTexture = textureLoader.load('/earth/specularClouds.jpg');
earthSpecularCloudsTexture.anisotropy = 8;

const earthParameters = {
  atmosphereDayColor: '#87CEEB',
  atmosphereTwilightColor: '#FFA500'
};

const Atmosphere: React.FC<MeshProps> = (props) => {
  const meshRef = useRef<Mesh>(null);
  const { value } = useSlider();





  const earthMaterial = useMemo(() => new ShaderMaterial({
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewMatrix * modelPosition;

        vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

        vUv = uv;
        vNormal = modelNormal;
        vPosition = modelPosition.xyz;
      }
    `,
    fragmentShader: `
      uniform sampler2D uDayTexture;
      uniform sampler2D uNightTexture;
      uniform sampler2D uSpecularCloudsTexture;
      uniform vec3 uAtmosphereDayColor;
      uniform vec3 uAtmosphereTwilightColor;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        vec3 viewDirection = normalize(vPosition - cameraPosition);
        vec3 normal = normalize(vNormal);
        vec3 color = vec3(0.0);

        vec3 dayColor = texture2D(uDayTexture, vUv).rgb;
        color = dayColor;

        gl_FragColor = vec4(color, 1.0);
      }
    `,
    uniforms: {
      uDayTexture: new Uniform(earthDayTexture),
      uNightTexture: new Uniform(earthNightTexture),
      uSpecularCloudsTexture: new Uniform(earthSpecularCloudsTexture),
      uAtmosphereDayColor: new Uniform(new Color(earthParameters.atmosphereDayColor)),
      uAtmosphereTwilightColor: new Uniform(new Color(earthParameters.atmosphereTwilightColor))
    }
  }), []);

  const atmosphereMaterial = useMemo(() => new ShaderMaterial({
    side: BackSide,
    transparent: true,
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewMatrix * modelPosition;

        vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

        vNormal = modelNormal;
        vPosition = modelPosition.xyz;
      }
    `,
    fragmentShader: `
      uniform vec3 uAtmosphereDayColor;
      uniform vec3 uAtmosphereTwilightColor;

      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        vec3 viewDirection = normalize(vPosition - cameraPosition);
        vec3 normal = normalize(vNormal);
        vec3 color = vec3(0.0);

        color = vec3(0.5, 0.7, 1.0); // Simple blue atmosphere color

        float edgeAlpha = dot(viewDirection, normal);
        edgeAlpha = smoothstep(0.0, 0.5, edgeAlpha);

        gl_FragColor = vec4(color, 0.3 * edgeAlpha); // Reduced opacity
      }
    `,
    uniforms: {
      uAtmosphereDayColor: new Uniform(new Color(earthParameters.atmosphereDayColor)),
      uAtmosphereTwilightColor: new Uniform(new Color(earthParameters.atmosphereTwilightColor))
    },
  }), []);


  useFrame(() => {
    if (meshRef.current) {
      // Use the single rotation value instead of accessing it as an array
      meshRef.current.setRotationFromEuler(new Euler(0, value.rotation, 0));
    }
  });

  return (
    <>
      <mesh ref={meshRef} {...props}>
        <sphereGeometry args={[64.4, 64, 64]} />
        <primitive object={earthMaterial} attach="material" />
      </mesh>
      <mesh>
        <sphereGeometry args={[64.4, 64, 64]} />
        <primitive object={atmosphereMaterial} attach="material" />
      </mesh>
    </>
  );
};

export default Atmosphere;