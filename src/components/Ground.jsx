
const Ground = (props) => {
    return (
      <mesh receiveShadow={true} scale={30} rotateX={-Math.PI/2} rotateZ = {Math.PI/2}>
        <planeBufferGeometry attach="geometry" args={[25, 15]} />
        <shadowMaterial attach="material" color="black" opacity={0.1}/>
      </mesh>
    )
}
export default Ground;