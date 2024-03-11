import {
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  Typography
} from '@mui/material';
import { Html, OrbitControls, Stage, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import * as THREE from 'three';
import useLocales from '../../hooks/useLocales';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import LunarEclipseModel from './LunarEclipseModel';
import Iconify from 'src/components/Iconify';
import { ButtonPlay, ButtonInfo, ButtonPause, ButtonReplay } from 'src/components/ButtonGD';


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

export default function LunarEclipse() {

  const { themeStretch } = useSettings();

  const { translate } = useLocales();

  const [noteDescription, setNoteDescription] = useState('');
  const [events, setEvents] = useState();

  const [isPause, setPause] = useState(false);
  const [isReload, setReload] = useState(1);

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

  function onScreenChange() {
    const isFull = screen.active;
    if (isFull)
      return screen.exit();
    if (!isFull)
      return screen.enter();
  }


  function Loader() {
    const { progress, } = useProgress();
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

  const note = (vectorEvent) => {
    if (vectorEvent) {
      const vector = new THREE.Vector3();
      vectorEvent.object.getWorldPosition(vector);
      if (vectorEvent.object.name === 'Sphere') {
        setNoteDescription('Mặt trời')
      }
      if (vectorEvent.object.name === 'TD') {
        setNoteDescription('Trái đất')
      }
      if (vectorEvent.object.name === 'moon') {
        setNoteDescription('Mặt trăng')
      }
    }
  };

  useEffect(() => {
    note(events)
  }, [events])

  return (
    <Page title={translate('lunar_eclipse')}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <FullScreen handle={screen}>
          <Card
            onDoubleClick={() => onScreenChange()}
            sx={{
              mb: 3,
              height: heightCard,
              position: 'relative',
              backgroundImage: 'url(/images/background/bg-lunar-eclipse.jpg)',
              backgroundSize: "cover",
            }}
          >
            <Canvas linear camera={{ fov: 35, near: 0.1, far: 20000 }}>
              <Suspense fallback={<Loader />}>
                <Stage contactShadowOpacity={1}>
                  {/* <Model /> */}
                  <LunarEclipseModel pause={isPause} eventsData={(e) => setEvents(e)} reload={isReload} />
                </Stage>
              </Suspense>
              <OrbitControls makeDefault />
            </Canvas>
            <div style={description}>
              <p>
                <strong>{translate('names.model')}:</strong>  {translate('lunar_eclipse')}<br />
                <strong>{translate('names.author')}:</strong> {translate('lunar_eclipse_author')}<br />
                <strong>{translate('names.by')}:</strong> {translate('lunar_eclipse_by')}<br />
              </p>  
            </div>
            {/* {noteDescription !== '' &&
              <Box sx={{ position: 'absolute', bottom: 0, left: 0 }}>
                <Grid item pl={3} width={{ md: '300px' }} height={{ md: '200px' }}>
                  <Typography textAlign='center' variant="caption" component="div" color="white">
                    {noteDescription}
                  </Typography>
                  <Typography variant="caption" component="div" color="white">
                    Trọng lực: 1,62 m/s²
                  </Typography>
                  <Typography variant="caption" component="div" color="white">
                    Tuổi: 4,53E9 tuổi
                  </Typography>
                  <Typography variant="caption" component="div" color="white">
                    Bán kính: 1.737,4 km
                  </Typography>
                  <Typography variant="caption" component="div" color="white">
                    Chu kỳ quay: 27 ngày
                  </Typography>
                  <Typography variant="caption" component="div" color="white">
                    Khoảng cách tới Trái đất: 384.400 km
                  </Typography>
                  <Typography variant="caption" component="div" color="white">
                    Mật độ: 3,34 g/cm³
                  </Typography>
                </Grid>
              </Box>
            } */}
            <Box sx={{ position: 'absolute', bottom: 10, right: 10 }}>
              <Grid container gap={2}>
                <ButtonInfo />
                {isPause ?
                  <ButtonPlay onClick={() => setPause(false)} />
                  :
                  <ButtonPause onClick={() => setPause(true)} />
                }
                <ButtonReplay onClick={() => setReload(isReload + 1)} />
              </Grid>
            </Box>
          </Card>
        </FullScreen>
      </Container>
    </Page>
  );
}
