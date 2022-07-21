import React from 'react'
import { Canvas } from '@react-three/fiber'
import { GizmoHelper, GizmoViewport } from "@react-three/drei"

import {CamControl, Ground, Robot} from '../components/index'

function Playground() {
  return (
    <div className="w-full h-screen">
        <Canvas shadows style={{ background: "#28353A" }} camera={{ fov: 75, position: [2, 2, 2], up: [0, 0, 1] }}>
            <perspectiveCamera position={[10, 10, 20]}/>
            <ambientLight intensity={0.2}/>
            <directionalLight position={[5, 30, 5]} castShadow={true} intensity={1.0} shadow-mapSize-height={1024} shadow-mapSize-width={1024} />
            <CamControl/>
            <axesHelper args={[0.5, 0.5, 0.5]} />
            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                <GizmoViewport axisColors={["hotpink", "aquamarine", "#3498DB"]} labelColor="black" />
            </GizmoHelper>

            <Robot filePath='./urdf/Flexiv/urdf/A02L-P.urdf' position={[0, 0, 0]}/>
            <Ground/>
        </Canvas>
  </div>
  )
}

export default Playground