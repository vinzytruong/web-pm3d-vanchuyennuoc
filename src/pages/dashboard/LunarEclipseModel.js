import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html } from '@react-three/drei';
import {
  Box,
  Card,
  Container,
  CircularProgress,
  Typography,
  Grid
} from '@mui/material';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import useSettings from '../../hooks/useSettings';
import useLocales from '../../hooks/useLocales';
// components
import Page from '../../components/Page';


// ----------------------------------------------------------------------

const description = {
  padding: '20px',
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDrection: 'column',
  justifyContent: 'end',
  color: 'white',
  pointerEvents: 'none',
  WebkitUserSelect: "none",
  userSelect: "none"
}

// ----------------------------------------------------------------------

export default function LunarEclipseModel({ pause, eventsData, reload }) {

  const [events, setEvents] = useState();

  useEffect(() => {
    eventsData(events)
  }, [events])

  useGLTF.preload('/model/gltf/lunar-eclipse.gltf')
  const { scene, animations } = useGLTF('/model/gltf/lunar-eclipse.gltf')
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