import * as THREE from 'three';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html } from '@react-three/drei';
import {
  Box,
  Card,
  Container,
  CircularProgress,
  Typography
} from '@mui/material';
import { Popconfirm } from 'antd';
import 'antd/dist/antd.css'
import './test.css'
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

export default function Digestive({onClick}) {

  const { themeStretch } = useSettings();

  const { translate } = useLocales();
  const [noteDescription, setNoteDescription] = useState('');

  useGLTF.preload('/model/gltf/hetieuhoatest.gltf')
  function Model(props) {
    const { scene, animations } = useGLTF('/model/gltf/hetieuhoatest.gltf')
    const { actions } = useAnimations(animations, scene)
    useEffect(() => {
      // actions.animation_0.play();
      scene.traverse((obj) => (obj.isMesh && (obj.receiveShadow === obj.castShadow === true)));
    }, [actions, scene, noteDescription])
    return (
      <mesh > 
        <primitive object={scene} {...props}  onClick={(vectorEvent) => note(vectorEvent)}/>
        <Html center>
          <Popconfirm title="Are you sure you want to leave?" onConfirm={onClick} okText="Yes" cancelText="No">
            <Typography variant="string">{noteDescription}</Typography>
          </Popconfirm>
        </Html>
      </mesh>
    )
  }
  const note = (vectorEvent) => {
    const vector = new THREE.Vector3();
    vectorEvent.object.getWorldPosition(vector);
    if (vector.x === -34.727821350097656) {
      setNoteDescription('Gan')
    }
    if (vector.x === 63.91581726074219 ) {
      setNoteDescription('Bao tử')
    }
  };
  

  // set full screen
  const screen = useFullScreenHandle();
  const [heightCard, setHeightCard] = useState('83vh')
  const isFull = screen.active;
  useEffect(() => {
    if (isFull === false) {
      setHeightCard('83vh')
    } else
      setHeightCard('100vh')
  }, [heightCard, setHeightCard, isFull])

  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center style={{
        color: '#fff'
      }}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress size={90} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption" component="div" color="white">
              {`${Math.round(progress)}%`}
            </Typography>
          </Box>
        </Box>
      </Html>
    );
  }

  return (
    <Page title={translate('digestive')}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <FullScreen handle={screen}>
          <Card
            onDoubleClick={screen.enter}
            sx={{
              mb: 3,
              height: heightCard,
              position: 'relative',
              bgcolor: '#606060',
            }}
          >
            <Canvas dpr={[3, 2]} linear camera={{ fov: 65 }}>
              <Suspense fallback={<Loader />}>
                <Stage contactShadowOpacity={1}>
                  <Model />
                </Stage>
              </Suspense>
              <OrbitControls  makeDefault />
            </Canvas>
            <div style={description}>
              <p>
                <strong>{translate('names.model')}:</strong>  {translate('digestive')}<br />
                <strong>{translate('names.author')}:</strong> {translate('digestive_author')}<br />
                <strong>{translate('names.by')}:</strong> {translate('digestive_by')}<br />
              </p>
            </div>
          </Card>
        </FullScreen>
      </Container>
    </Page>
  );
}
