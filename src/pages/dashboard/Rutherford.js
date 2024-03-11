import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html } from '@react-three/drei';

// @mui
import { Box, Card, Container, CircularProgress, Typography, Button, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import CachedIcon from '@mui/icons-material/Cached';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import useSettings from '../../hooks/useSettings';
import useLocales from '../../hooks/useLocales';

// components
import Page from '../../components/Page';
import { ButtonInfo, ButtonPause, ButtonPlay, ButtonReplay } from 'src/components/ButtonGD';
import RutherfordModel from './RutherfordModel';
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
  WebkitUserSelect: 'none',
  userSelect: 'none',
};

// ----------------------------------------------------------------------
export default function Rutherford() {
  const { themeStretch } = useSettings();

  const { translate } = useLocales();
  const [isPlay, setIsPlay] = useState(true);
  const [isPause, setPause] = useState(false);
  const [isReload, setReload] = useState(1);
  const [events, setEvents] = useState();
  const [noteDescription, setNoteDescription] = useState({ description: '', x: null, y: null });

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
  const note = (vectorEvent) => {
    const x_click = vectorEvent?.clientX;
    const y_click = vectorEvent?.clientY;
    // console.log("djahdk",vectorEvent);
    // setCoordinates({ x, y });
    if (vectorEvent) {
      const vector = new THREE.Vector3();
      vectorEvent.object.getWorldPosition(vector);


      if (vectorEvent.object.name.includes("_")) {
        setNoteDescription({ description: 'Electron', x: x_click, y: y_click })
      }
      else if (!vectorEvent.object.name.includes("_")) {
        setNoteDescription({ description: 'Hạt nhân', x: x_click, y: y_click })
      }
      else setNoteDescription({ description: '', x: x_click, y: y_click })
    }
  };

  useEffect(() => {
    note(events)
  }, [events])

  function Loader() {
    const { progress } = useProgress();
    return (
      <Html
        center
        style={{
          color: '#fff',
        }}
      >
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
    <Page title={translate('Rutherford')}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <FullScreen handle={screen}>
          <Card
            onDoubleClick={() => onScreenChange()}
            sx={{
              mb: 3,
              height: heightCard,
              position: 'relative',
              bgcolor: '#000',
            }}
          >
            {/* {isPlay ? (
              <Button
                sx={{ margin: '8px' }}
                variant="contained"
                startIcon={<PauseIcon />}
                onClick={() => setIsPlay(!isPlay)}
              >
                {translate('action_paused')}
              </Button>
            ) : (
              <Button
                sx={{ margin: '8px' }}
                variant="contained"
                startIcon={<PlayArrowIcon />}
                onClick={() => setIsPlay(!isPlay)}
              >
                {translate('action_play')}
              </Button>
            )}
            <Button sx={{ margin: '8px' }} variant="contained" startIcon={<CachedIcon />} onClick={refresh}>
              {translate('action_reset')}
            </Button> */}
            <Canvas camera={{ fov: 45 }}>
              <Suspense fallback={<Loader />}>
                <Stage >
                  {/* <Model /> */}
                  <RutherfordModel pause={isPause} eventsData={(e) => setEvents(e)} reload={isReload} />
                </Stage>
              </Suspense>
              <OrbitControls makeDefault />
            </Canvas>
            <div style={description}>
              <p>
                <strong>{translate('names.model')}:</strong> {translate('rutherford')}
                <br />
                <strong>{translate('names.author')}:</strong> {translate('rutherford_author')}
                <br />
                <strong>{translate('names.by')}:</strong> {translate('rutherford_by')}
                <br />
              </p>
            </div>
            {noteDescription.description !== '' &&
              <Box sx={{ position: 'absolute', top: isFull? noteDescription?.y : noteDescription?.y - HEADER.MAIN_DESKTOP_HEIGHT, left: isFull? noteDescription?.x: noteDescription?.x - NAVBAR.DASHBOARD_WIDTH }}>
                <Grid item pl={0}>
                  <Typography textAlign='center' variant="caption" component="div" color="yellow">
                    {noteDescription.description}
                  </Typography>
                </Grid>
              </Box>
            }
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
