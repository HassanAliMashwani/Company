'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleTorus(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const count = 1200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const r = 2.2 + Math.sin(v * 3) * 0.4;
      positions[i * 3] = r * Math.cos(u);
      positions[i * 3 + 1] = r * Math.sin(u);
      positions[i * 3 + 2] = Math.sin(v) * 1.5;
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fallback view for reduced motion or when off-screen
  if (reducedMotion) {
    return (
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-500/10 to-transparent blur-3xl opacity-60 pointer-events-none" />
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {isVisible ? (
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.5} />
          <ParticleTorus />
        </Canvas>
      ) : (
        <div className="w-full h-full rounded-full bg-cyan-500/10 blur-2xl opacity-40" />
      )}
    </div>
  );
}
