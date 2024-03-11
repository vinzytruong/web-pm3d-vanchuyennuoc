import { useState, Suspense, useEffect } from 'react';
import { Canvas  } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html} from '@react-three/drei';

// @mui
import {
  Box,
  Card,
  Container,
  CircularProgress,
  Typography,
  Grid,
  Button
} from '@mui/material';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import useSettings from '../../hooks/useSettings';
import useLocales from '../../hooks/useLocales';

// components
import Page from '../../components/Page';
import ButtonControl from './ButtonControl';
import Model from './Model';

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
export default function SolarSystem() {
  const [isPause, setPause] = useState(false);
  const [isReload, setReload] = useState(1);
  const [events, setEvents] = useState();

  const { themeStretch } = useSettings();

  const { translate } = useLocales();

  // const [isPause, setPause] = useState(false);

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


  // useGLTF.preload('/model/gltf/hemattroi.gltf')
  // function Model(props) {
  //   const { scene, animations } = useGLTF('/model/gltf/hemattroi.gltf')
  //   const { actions } = useAnimations(animations, scene)
  //   useEffect(() => {
  //     if (isPause) {
  //       actions.animation_0.play();
  //     }
  //     scene.traverse((obj) => (obj.isMesh && (obj.receiveShadow === obj.castShadow === true)));
  //   }, [actions, scene])
  //   return (
  //     <mesh>
  //       <primitive object={scene} {...props} onClick={(vectorEvent) => note(vectorEvent)}/>
  //     </mesh>
  //   )
  // }

  const note = (vectorEvent) => {
    const vector = new THREE.Vector3();
    vectorEvent.object.getWorldPosition(vector);
    console.log('vectorEvent.object.name', vectorEvent.object.name);
    // if (vectorEvent.object.name === 'Sphere') {
    //   setNoteDescription('Mặt trời')
    //   // console.log(noteDescription)
    // }
    // if (vectorEvent.object.name === 'TD') {
    //   setNoteDescription('Trái đất')
    //   // console.log(noteDescription)
    // }
    // if (vectorEvent.object.name === 'moon') {
    //   setNoteDescription('Mặt trăng')
    //   // console.log(noteDescription)
    // }
  };

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

  function onScreenChange() {
    if(screen.active)
    return screen.exit();
    if(!screen.active)
    return screen.enter();
  }

  return (
    <Page title={translate('solarSystem')}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <FullScreen handle={screen}>
          <Card
            onDoubleClick={() => onScreenChange()}
            sx={{
              mb: 3,
              height: heightCard,
              position: 'relative',
              backgroundImage: 'url(/images/background/bg_nerve.png)',
              backgroundSize: "cover",
            }}
          >
            <Canvas pr={[1, 2]}   camera={{ fov: 40, near: 0.5, far:25000, position: [0, 0, 50] }}>
              <Suspense fallback={<Loader />}>
                <Stage contactShadowOpacity={1}>
                  {/* <Model /> */}
                  <Model pause={isPause} events={events} setEvents={setEvents} src='/model/gltf/hemattroi.gltf' eventsData={(e) => setEvents(e)} reload={isReload}/>
                </Stage>
              </Suspense>
              <OrbitControls makeDefault />
            </Canvas>
            <div style={description}>
              <p>
                <strong>{translate('names.model')}:</strong>  {translate('solarSystem')}<br />
                <strong>{translate('names.author')}:</strong> {translate('solarSystem_author')}<br />
                <strong>{translate('names.by')}:</strong> {translate('solarSystem_by')}<br />
              </p>
            </div>
            <ButtonControl isPause={isPause} setPause={setPause} isReload={isReload} setReload={setReload}/>
            {/* <Box sx={{ position: 'absolute', top: 20, left: 5 }}>
              <Grid item pl={3} width={{ md: '300px' }} height={{ md: '200px' }}>
                {isPause ?
                  <Button variant='contained' onClick={() => setPause(false)}>Dừng</Button>
                  :
                  <Button variant='contained' onClick={() => setPause(true)}>Tiếp tục</Button>}
              </Grid>
            </Box> */}
          </Card>
        </FullScreen>
      </Container>
    </Page>
  );
}

