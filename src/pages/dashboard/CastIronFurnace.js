import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html } from '@react-three/drei';

// @mui
import { Box, Card, Container, CircularProgress, Typography, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
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
  WebkitUserSelect: 'none',
  userSelect: 'none',
};

// ----------------------------------------------------------------------
export default function CastIronFurnace() {
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

  // useGLTF.preload('/model/gltf/logang.gltf');
  // function Model(props) {
    
  //   const { scene, animations } = useGLTF('/model/gltf/logang.gltf');
  //   const { actions } = useAnimations(animations, scene);
  //   useEffect(() => {
  //     if (isPlay) {
  //       actions.animation_0.play();
  //     } else {
  //       actions.animation_0.reset();
  //     }
  //     scene.traverse((obj) => obj.isMesh && (obj.receiveShadow === obj.castShadow) === true);
  //   }, [actions, scene]);
  //   return (
  //     <mesh>
  //       <primitive object={scene} {...props} />
  //     </mesh>
  //   );
  // }

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
  function onScreenChange() {
    const isFull = screen.active;
    if (isFull)
      return screen.exit();
    if (!isFull)
      return screen.enter();
  }
  return (
    <Page title={translate('cast_iron_furmace')}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <FullScreen handle={screen}>
          <Card
            onDoubleClick={() => onScreenChange()}
            sx={{
              mb: 3,
              height: heightCard,
              position: 'relative',
              backgroundImage: 'url(/images/background/bg-ethylic-acohol.png)',
              backgroundSize: 'cover',
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
            )} */}
            <Canvas camera={{ fov: 30 }}>
              <Suspense fallback={<Loader />}>
                <Stage contactShadowOpacity={1}>
                  {/* <Model /> */}
                  <Model pause={isPause} events={events} setEvents={setEvents} src='/model/gltf/logang.gltf' eventsData={(e) => setEvents(e)} reload={isReload}/>
                </Stage>
              </Suspense>
              <OrbitControls makeDefault />
            </Canvas>
            <div style={description}>
              <p>
                <strong>{translate('names.model')}:</strong> {translate('cast_iron_furmace')}
                <br />
                <strong>{translate('names.author')}:</strong> {translate('cast_iron_furmace_author')}
                <br />
                <strong>{translate('names.by')}:</strong> {translate('cast_iron_furmace_by')}
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
