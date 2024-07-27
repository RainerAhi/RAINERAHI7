import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { useControls } from 'leva'

export default function Model() {
    const { nodes } = useGLTF("./torrus.glb");
    const { viewport } = useThree()
    const torus = useRef(null);

    const { gradient } = useControls({ gradient: { value: 0.7, min: 0, max: 1 } })

    // Animate gradient
    useFrame((state) => {
      const sin = Math.sin(state.clock.elapsedTime / 2)
      const cos = Math.cos(state.clock.elapsedTime / 2)
      ref.current.layers[0].origin.set(cos / 2, 0, 0)
      ref.current.layers[1].origin.set(cos, sin, cos)
      ref.current.layers[2].origin.set(sin, cos, sin)
      ref.current.layers[3].origin.set(cos, sin, cos)
    })
    
    // useFrame( () => {
    //     torus.current.rotation.x += 0.02
    // })
    
    return (
        <group scale={0.4} >
            <mesh ref={torus}>
                <torusGeometry args={[3, 1.5, 16, 100]} />
                {/* <MeshTransmissionMaterial  thickness={ 0.2 } roughness={ 0 } transmission={ 1 } ior={ 1.2 } chromaticAberration={ 0.02 } backside={ true } /> */}
                <LayerMaterial toneMapped={false}>
        <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * gradient} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * gradient} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * gradient} far={3} origin={[0, 1, -1]} />
        <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * gradient} far={1.5} origin={[1, -1, -1]} />
        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
      </LayerMaterial>
            </mesh>
        </group>
    )
}