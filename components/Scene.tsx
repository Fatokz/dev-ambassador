// components/Scene.tsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';
// @ts-ignore
import * as random from 'maath/random';

function Stars(props: any) {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.5 }));
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial transparent color="#5EEAD4" size={0.002} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    );
}

export default function Scene() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
}