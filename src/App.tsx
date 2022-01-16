import React from 'react';
import './App.css';
import * as THREE from "three"
import {Canvas, useFrame} from "@react-three/fiber"
import {OrbitControls, Stars} from "@react-three/drei"

function Box() {
    return(
        <mesh position={[0, 2, 0]}>
            <boxBufferGeometry attach="geometry"></boxBufferGeometry>
            <meshLambertMaterial attach="material" color="green"/>
        </mesh>
    )
}

function Plane() {
    return(
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[10, 10]}/>
            <meshLambertMaterial attach="material" color="blue"/>
        </mesh>
    )
}

function App() {
    return (
        <div className="App">
            <Canvas>
                <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined}/>
                <Stars/>
                <ambientLight intensity={0.8}/>
                <spotLight position={[10, 15, 10]} angle={0.3}/>
                <Box/>
                <Plane/>
            </Canvas>
        </div>
    );
}

export default App;
