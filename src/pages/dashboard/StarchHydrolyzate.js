import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html } from '@react-three/drei';
import { Box, Card, Container, CircularProgress, Typography, Button } from '@mui/material';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
// routes
import useSettings from '../../hooks/useSettings';
import useLocales from '../../hooks/useLocales';
// components
import Page from '../../components/Page';
import Model from './Model';
import ButtonControl from './ButtonControl';

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

export default function StarchHydrolyzate() {
  const [isPause, setPause] = useState(false);
  const [isReload, setReload] = useState(1);
  const [events, setEvents] = useState();

  const { themeStretch } = useSettings();
  const [isPlay, setIsPlay] = useState(true);
  const { translate } = useLocales();

  // set full screen
  const screen = useFullScreenHandle();
  const [heightCard, setHeightCard] = useState('83vh');
  const isFull = screen.active;
  useEffect(() => {
    if (isFull === false) {
      setHeightCard('83vh');
    } else setHeightCard('100vh');
  }, [heightCard, setHeightCard, isFull]);

  

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
    <Page title={translate('starch_hydrolyzate')}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <FullScreen handle={screen}>
          <Card
            onDoubleClick={screen.enter}
            sx={{
              mb: 3,
              height: heightCard,
              position: 'relative',
              backgroundImage: 'url(/images/background/bg_nerve.png)',
              backgroundSize: 'cover',
            }}
          >
           

            <Canvas camera={{ fov: 45 }}>
              <Suspense fallback={<Loader />}>
                <Stage contactShadowOpacity={0.5}>
                <Model pause={isPause} events={events} setEvents={setEvents} src='/model/gltf/thuyphantinhbot.gltf' eventsData={(e) => setEvents(e)} reload={isReload}/>
                </Stage>
              </Suspense>
              <OrbitControls makeDefault />
            </Canvas>
            <div style={description}>
              <p>
                <strong>{translate('names.model')}:</strong> {translate('starch_hydrolyzate')}
                <br />
                <strong>{translate('names.author')}:</strong> {translate('starch_hydrolyzate_author')}
                <br />
                <strong>{translate('names.by')}:</strong> {translate('starch_hydrolyzate_by')}
                <br />
              </p>
            </div>
            <ButtonControl isPause={isPause} setPause={setPause} isReload={isReload} setReload={setReload}/>
          </Card>
        </FullScreen>
      </Container>
    </Page>
  );
}
