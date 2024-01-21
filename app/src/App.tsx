import React from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline text-red-600">
      Simple React Typescript Tailwind Sample
    </h1>
    <div id="canvas-container">
     <Canvas />
    </div>
    </>
  );  
}

export default App;