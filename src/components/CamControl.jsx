
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { PointerURDFDragControls } from 'urdf-loader/src/URDFDragControls'

const CamControl = (props) => {
    const state = useThree();
    const dragControls = new PointerURDFDragControls(state.scene, state.camera, state.gl.domElement);
    const [enableControl, setControl] = useState(true);
    dragControls.onDragStart = joint => { setControl(false); };
    dragControls.onDragEnd = joint => { setControl(true); };
    
    useEffect( () => {
        const controls = new OrbitControls(state.camera, state.gl.domElement);
        controls.minDistance = 1;
        controls.enabled = enableControl;
        return () => { controls.dispose(); };
      },
      [state.camera, state.gl, enableControl]
    );
    return null;
}
export default CamControl;
