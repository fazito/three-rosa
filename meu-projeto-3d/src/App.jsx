import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from './Modelo' // O componente que o gltfjsx gerou para você

function App() {
  return (
    <Canvas camera={{ position:[30, 0, 0], fov: 50 }}>
      {/* O Stage configura automaticamente uma iluminação profissional e centraliza seu modelo */}
      <Stage environment="city" intensity={0.6}>
        <Model />
      </Stage>

      {/* Permite que você rotacione e dê zoom no modelo com o mouse */}
      <OrbitControls makeDefault enableDamping />
    </Canvas>
  )
}

export default App
