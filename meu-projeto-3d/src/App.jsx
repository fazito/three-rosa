import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { useTranslation } from 'react-i18next' 
import { Model } from './Modelo' // O componente que o gltfjsx gerou 
import { Navbar } from './Navbar'

function App() {
    const { t } = useTranslation() 
  return (
    <div className="app-container">
      
      {/* 1. O CANVAS COMO PLANO DE FUNDO */}
      <div className="canvas-background">
        <Canvas camera={{ position:[30, 0, 0], fov: 50 }}>
          <Stage environment="city" intensity={0.6}>
            
              <Model />
           
          </Stage>
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
