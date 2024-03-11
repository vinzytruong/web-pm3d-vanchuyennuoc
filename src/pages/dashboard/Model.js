import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';


export default function Model({ pause, eventsData, reload, src, events, setEvents }) {
    useEffect(() => {
        eventsData(events)
    }, [events])

    useGLTF.preload(src)
    const { scene, animations } = useGLTF(src)
    const { actions } = useAnimations(animations, scene)
    console.log("abc",actions);
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