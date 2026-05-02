import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PerformanceMonitor } from '@react-three/drei';
import * as THREE from 'three';

/* ── Frosted Glass Torus (Optimized) ── */
function GlassTorus() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.12;
    ref.current.rotation.y += delta * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} position={[-3.5, 0.3, -1]}>
        <torusGeometry args={[0.7, 0.25, 16, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.4}
          envMapIntensity={2.0}
        />
      </mesh>
    </Float>
  );
}

/* ── Metallic Sphere ── */
function MetalSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.6}>
      <mesh ref={ref} position={[3.5, -0.5, -2]}>
        <sphereGeometry args={[0.4, 24, 24]} />
        <meshStandardMaterial
          color="#d4d4d8"
          metalness={1.0}
          roughness={0.15}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

/* ── Floating Cubes ── */
function FloatingCubes() {
  const groupRef = useRef<THREE.Group>(null!);

  const cubes = useMemo(() => [
    { pos: [4, 1.5, -3] as [number, number, number], size: 0.18, speed: 0.3 },
    { pos: [-4, -1.2, -2] as [number, number, number], size: 0.14, speed: 0.4 },
    { pos: [2.5, -2, -3.5] as [number, number, number], size: 0.12, speed: 0.5 },
    { pos: [-2.5, 2, -2] as [number, number, number], size: 0.16, speed: 0.25 },
    { pos: [0.8, 2.5, -4] as [number, number, number], size: 0.1, speed: 0.35 },
    { pos: [-1, -2.5, -3] as [number, number, number], size: 0.13, speed: 0.3 },
  ], []);

  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta * 0.02;
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <Float key={i} speed={cube.speed * 2.5} rotationIntensity={0.4} floatIntensity={0.4}>
          <mesh position={cube.pos}>
            <boxGeometry args={[cube.size, cube.size, cube.size]} />
            <meshStandardMaterial
              color="#e4e4e7"
              metalness={0.6}
              roughness={0.2}
              transparent
              opacity={0.35}
              envMapIntensity={1.0}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ── Main Export ── */
export default function Hero3D() {
  // Start with a lower DPR to ensure smoothness, increase if performance allows
  const [dpr, setDpr] = useState(1);
  
  return (
    <div className="hero-3d-container">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 7], fov: 40 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'none' }}
      >
        <PerformanceMonitor onIncline={() => setDpr(1.5)} onDecline={() => setDpr(1)} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <directionalLight position={[-3, -3, 2]} intensity={0.2} color="#a5b4fc" />
        
        {/* Environment map creates stunning reflections cheaply without transmission */}
        <Environment preset="city" />
        
        <GlassTorus />
        <MetalSphere />
        <FloatingCubes />
      </Canvas>
    </div>
  );
}
