import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html } from '@react-three/drei';
import {
  CubeTextureLoader
} from 'three';
// @mui

import {
  Box,
  Card,
  Container,
  CircularProgress,
  Typography,
  Grid
} from '@mui/material';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// hooks

import useSettings from '../../hooks/useSettings';
import useLocales from '../../hooks/useLocales';
// components
import Page from '../../components/Page';
import ButtonControl from './ButtonControl';
import Model from './Model';
import * as THREE from 'three';
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

export default function EarthMagnetic() {
  const [isPause, setPause] = useState(false);
  const [isReload, setReload] = useState(1);
  const [events, setEvents] = useState();
  const [position, setPosition] = useState({id:null, x: null, y: null });
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

  const note = (vectorEvent) => {
    const x_click = vectorEvent?.clientX;
    const y_click = vectorEvent?.clientY;
    if (vectorEvent) {
      const vector = new THREE.Vector3();
      vectorEvent?.object.getWorldPosition(vector);
      // console.log("djahdk", coordinates);

      if (vectorEvent?.object.name === "trai_dat") {
        setNoteDescription({ description: 'Trái đất', x: x_click, y: y_click })
      }
      else if (vectorEvent?.object.name === "truc_trai_dat") {
        setNoteDescription({ description: 'Trục quay Trái đất', x: x_click, y: y_click })
      }
      else if (vectorEvent?.object.name.includes("truc_nam_cham")) {
        setNoteDescription({ description: 'Trục từ', x: x_click, y: y_click })
      }
      else setNoteDescription('')
    }
  };

  useEffect(() => {
    note(events)
  }, [events])


  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center style={{
        color: '#fff',
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
    <Page title={translate('earth_magnetic')}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <FullScreen handle={screen}>
          <Card
            onDoubleClick={screen.enter}
            sx={{
              mb: 3,
              height: heightCard,
              position: 'relative',
              backgroundImage: 'url(/images/background/1.jpg)',
              backgroundSize: "cover",
            }}
          >
            <Canvas dpr={[1.5, 2]} linear shadows>
              <Suspense fallback={<Loader />}>
                <Stage contactShadowOpacity={1}>
                  <Model pause={isPause} events={events} setEvents={setEvents} src='/model/gltf/tutruongtraidat.gltf' eventsData={(e) => setEvents(e)} reload={isReload} />
                </Stage>
              </Suspense>
              <OrbitControls makeDefault />
            
            </Canvas>
            <div style={description}>
              <p>
                <strong>{translate('names.model')}:</strong>  {translate('earth_magnetic')}<br />
                <strong>{translate('names.author')}:</strong> {translate('earth_magnetic_author')}<br />
                <strong>{translate('names.by')}:</strong> {translate('earth_magnetic_by')}<br />
              </p>
            </div>

            {noteDescription.description !== '' &&
              <Box sx={{ position: 'absolute', top: isFull ? noteDescription?.y : noteDescription?.y - HEADER.MAIN_DESKTOP_HEIGHT, left: isFull ? noteDescription?.x : noteDescription?.x - NAVBAR.DASHBOARD_WIDTH }}>
                <Grid item pl={0}>
                  <Typography textAlign='center' variant="caption" component="div" color="yellow">
                    {noteDescription?.description}
                  </Typography>
                </Grid>
              </Box>
            }

            <ButtonControl isPause={isPause} setPause={setPause} isReload={isReload} setReload={setReload} />
          </Card>
        </FullScreen>
      </Container>
    </Page >
  );
};  