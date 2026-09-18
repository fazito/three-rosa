import { useRef } from 'react' // Garanta que useRef está aqui
import { useGLTF, Center } from '@react-three/drei'
import { useFrame } from '@react-three/fiber' // Adicione o useFrame aqui


export function Model(props) {
  const { nodes, materials } = useGLTF('/modelo-transformed.glb')
  // 1. Criamos a referência que vai se conectar ao grupo 3D
  const grupoRef = useRef()

  // 2. O useFrame roda a cada frame do jogo/cena
  useFrame((state, delta) => {
    if (grupoRef.current) {
      // Modifica apenas a rotação no eixo Y de forma constante
      // O delta garante que a velocidade seja a mesma em qualquer monitor (60hz, 144hz, etc)
      grupoRef.current.rotation.y += delta * 0.5 // Mude 0.5 para aumentar/diminuir a velocidade
    }
  })
  
  return (
    <group ref={grupoRef} {...props} dispose={null}>
       <Center>
      <mesh geometry={nodes.Curve010.geometry} material={materials.direitoA} position={[0.085, 1.462, -0.421]} rotation={[0, 0.396, -Math.PI / 2]} scale={[1.38, 1, 1.38]} />
      <mesh geometry={nodes.Curve010_1.geometry} material={materials.SVGMat} position={[0.085, 1.462, -0.421]} rotation={[0, 0.396, -Math.PI / 2]} scale={[1.38, 1, 1.38]} />
      <mesh geometry={nodes.Curve010_2.geometry} material={materials.esquerdoL} position={[0.085, 1.462, -0.421]} rotation={[0, 0.396, -Math.PI / 2]} scale={[1.38, 1, 1.38]} />
      <mesh geometry={nodes.Curve010_3.geometry} material={materials['direitoL.001']} position={[0.085, 1.462, -0.421]} rotation={[0, 0.396, -Math.PI / 2]} scale={[1.38, 1, 1.38]} />
      <mesh geometry={nodes.Curve010_4.geometry} material={materials.esquerdoA} position={[0.085, 1.462, -0.421]} rotation={[0, 0.396, -Math.PI / 2]} scale={[1.38, 1, 1.38]} />
      </Center>
    </group>
  )
}

useGLTF.preload('/modelo-transformed.glb')
