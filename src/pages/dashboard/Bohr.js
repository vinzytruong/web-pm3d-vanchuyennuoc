import * as THREE from 'three';
import { capitalCase } from 'change-case';
import { useState, Suspense, useEffect, useRef, useMemo } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Stars, useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html } from '@react-three/drei';
import {
  CubeTextureLoader
} from 'three';
// @mui
import { styled } from '@mui/material/styles';
import {
  Tab,
  Box,
  Card,
  Tabs,
  Container,
  CircularProgress,
  Typography,
  Grid
} from '@mui/material';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { deepPurple } from '@mui/material/colors';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
import useTabs from '../../hooks/useTabs';
import useSettings from '../../hooks/useSettings';
import useLocales from '../../hooks/useLocales';
// _mock_
import { _userAbout, _userFeeds, _userFriends, _userGallery, _userFollowers } from '../../_mock';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { ButtonInfo, ButtonPause, ButtonPlay, ButtonReplay } from 'src/components/ButtonGD';
import ButtonControl from './ButtonControl';
import Model from './Model';
import { HEADER, NAVBAR } from 'src/config';
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

export default function Saccarozo() {
  const [isPause, setPause] = useState(false);
  const [isReload, setReload] = useState(1);
  const [events, setEvents] = useState();
  const [noteDescription, setNoteDescription] = useState({ description: '', x: null, y: null });
  const { themeStretch } = useSettings();

  const { translate } = useLocales();

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

  // useGLTF.preload('/model/gltf/bohr.gltf')
  // function Model(props) {
  //   const { scene, animations } = useGLTF('/model/gltf/bohr.gltf')
  //   const { actions } = useAnimations(animations, scene)
  //   useEffect(() => {
  //     actions.animation_0.play();
  //     scene.traverse((obj) => ( obj.isMesh && (obj.receiveShadow === obj.castShadow === true) ));
  //   }, [actions, scene])
  //   return (
  //     <mesh>
  //       <primitive object={scene} {...props}/>
  //     </mesh>
  //   )
  // }
  const note = (vectorEvent) => {
    const x_click = vectorEvent?.clientX;
    const y_click = vectorEvent?.clientY;

    // setCoordinates({ x, y });
    if (vectorEvent) {
      const vector = new THREE.Vector3();
      vectorEvent.object.getWorldPosition(vector);

      console.log("djahdk", vectorEvent.object.name);
      if (vectorEvent.object.name.includes("nhan")) {
        setNoteDescription({ description: 'Hạt nhân', x: x_click, y: y_click })
      }
      else if (vectorEvent.object.name.includes("Torus")) {
        setNoteDescription({ description: 'Lớp electron', x: x_click, y: y_click })
      }
      else setNoteDescription({ description: '', x: x_click, y: y_click })
    }
  };

  useEffect(() => {
    note(events)
  }, [events])

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
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
    const isFull = screen.active;
    if (isFull)
      return screen.exit();
    if (!isFull)
      return screen.enter();
  }
  return (
    <Page title={translate('Bohr')}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <FullScreen handle={screen}>
          <Card
            onDoubleClick={() => onScreenChange()}
            sx={{
              mb: 3,
              height: heightCard,
              position: 'relative',
              bgcolor: '#000'
            }}
          >
            <Canvas dpr={[1, 2]} camera={{ fov: 50, near: 0.1, far: 10000, position: [30, 100, 50] }}>
              <Suspense fallback={<Loader />}>
                <Stage contactShadowOpacity={1}>
                  <Model pause={isPause} events={events} setEvents={setEvents} src='/model/gltf/bohr.gltf' eventsData={(e) => setEvents(e)} reload={isReload} />
                </Stage>
              </Suspense>
              <OrbitControls makeDefault />
            </Canvas>
            <div style={description}>
              <p>
                <strong>{translate('names.model')}:</strong>  {translate('bohr')}<br />
                <strong>{translate('names.author')}:</strong> {translate('bohr_author')}<br />
                <strong>{translate('names.by')}:</strong> {translate('bohr_by')}<br />
              </p>
            </div>
            {noteDescription.description !== '' &&
              <Box sx={{ position: 'absolute', top: isFull? noteDescription?.y: noteDescription?.y - HEADER.MAIN_DESKTOP_HEIGHT, left: isFull? noteDescription?.x : noteDescription?.x - NAVBAR.DASHBOARD_WIDTH }}>
                <Grid item pl={0}>
                  <Typography textAlign='center' variant="caption" component="div" color="yellow">
                    {noteDescription.description}
                  </Typography>
                </Grid>
              </Box>
            }
            <ButtonControl isPause={isPause} setPause={setPause} isReload={isReload} setReload={setReload} />
          </Card>
        </FullScreen>
      </Container>
    </Page>
  );
}
