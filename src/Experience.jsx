import { Suspense, useRef, useState, useLayoutEffect, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Lightformer } from '@react-three/drei'
import { easing } from 'maath'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import * as THREE from "three"
import Model from './Shape'
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {

  const { camera, scene } = useThree()

  const controlsRef = useRef()

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile device on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isMobile)
  

  return (
    <>
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />

      {/* <OrbitControls minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 2} enableZoom={ true } enableRotate={ true } enablePan={ true } /> */}
      <Environment preset="city">
        <Lightformer intensity={8} position={[10, 5, 0]} scale={[10, 50, 1]} />
      </Environment>
      <Model />
      <OrbitControls />
      {/* {isMobile ? (
        <OrbitControls 
          minPolarAngle={Math.PI / -2} 
          maxPolarAngle={Math.PI / 2} 
          enableZoom={true} 
          enableRotate={true} 
          enablePan={false} 
          ref={controlsRef}
        />
      ) : (
        <Rig />
      )} */}

      </>
  )
}

function Rig() {
  useFrame((state, delta) => {
    const isMobile = window.innerWidth < 767;

    // Adjust camera behavior for mobile if needed
    if (isMobile) {
      // Mobile-specific camera settings
      easing.damp3(
        state.camera.position,
        [Math.sin(-state.pointer.x) * 3, state.pointer.y * 2.5, 147.5 + Math.cos(state.pointer.x) * 7],
        0.2,
        delta,
      )
    } else {
      // Default settings for non-mobile
      easing.damp3(
        state.camera.position,
        [Math.sin(-state.pointer.x) * 5, state.pointer.y * 3.5, 7.5 + Math.cos(state.pointer.x) * 10],
        0.2,
        delta,
      )
    }

    state.camera.lookAt(0, 0, 0)
  })
}