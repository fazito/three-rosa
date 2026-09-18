import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, Html } from '@react-three/drei'
import { useTranslation } from 'react-i18next' 
import { Model } from './Modelo' // O componente que o gltfjsx gerou 
import { Navbar } from './Navbar'

// Componente simples de Loader que aparece no centro do Canvas
function Loader3D() {
  return (
    <Html center>
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading 3D Scene...</p>
      </div>
    </Html>
  )
}

function App() {
    const { t } = useTranslation() 
  return (
    <div className="app-container">
      
      {/* 1. O CANVAS COMO PLANO DE FUNDO */}
      <div className="canvas-background">
        <Canvas camera={{ position:[30, 0, 0], fov: 50 }}>
           <Suspense fallback={<Loader3D />}>
          <Stage environment="city" intensity={0.6}>
            
              <Model />
           
          </Stage>
          </Suspense>
          {/* enableZoom={false} impede que o usuário dê zoom no fundo sem querer ao rolar a página */}
          <OrbitControls makeDefault enableDamping enableZoom={true} minDistance={1}
  maxDistance={10} />
        </Canvas>
      </div>

      {/* INTERFACE DO USUÁRIO */}
      <div className="content-overlay">
         <Navbar />
       

        {/* CONTEÚDO CENTRAL DA HOME PAGE */}
        <div className="hero-center">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <button className="cta-button" onClick={() => alert('Explorando...')}>
            {t('hero.cta')}
          </button>
        </div>

      </div>

    </div>
  )
}

export default App
