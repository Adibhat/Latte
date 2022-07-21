import React from 'react'
import URDFLoaderShim from './urdf-loader-fiber-shim.ts'
import { useLoader } from '@react-three/fiber'

function Robot(props) {
    const URDFRobot = useLoader(URDFLoaderShim, props.filePath);
    URDFRobot.traverse(c => {c.castShadow = true;});
    URDFRobot.rotateX = -Math.PI / 2;
    URDFRobot.rotateZ = Math.PI / 2;
    URDFRobot.updateMatrixWorld(true);
    
    return (
        <primitive object={ URDFRobot } castShadow={true} position={props.position}/>
    )
}

export default Robot;