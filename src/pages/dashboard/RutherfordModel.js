import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';


export default function RutherfordModel({ pause, eventsData, reload }) {

  const [events, setEvents] = useState();

  useEffect(() => {
    eventsData(events)
  }, [events])

  useGLTF.preload('/model/gltf/rutherford.glb')
  const { scene, animations } = useGLTF('/model/gltf/rutherford.glb')
  const { actions } = useAnimations(animations, scene)
  useEffect(() => {
    actions.animation_0.play();
    if (pause) {
      actions.animation_0.paused = 1

    } else {
      actions.animation_0.paused = 0
    }
    scene.traverse((obj) => (obj.isMesh && (obj.receiveShadow === obj.castShadow === true)));
  }, [actions, scene, pause])
  
  useEffect(() => {
    actions.animation_0.reset();
  }, [reload]);

  
  return (
    <mesh>
      <primitive object={scene} onClick={(e) => setEvents(e)} />
    </mesh>
  )
}