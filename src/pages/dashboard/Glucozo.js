import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html } from '@react-three/drei';
import { Box, Card, Container, CircularProgress, Typography } from '@mui/material';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
// routes
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
  WebkitUserSelect: 'none',
  userSelect: 'none',
};

// ----------------------------------------------------------------------

export default function Glucozo() {
  const { themeStretch } = useSettings();

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

  useGLTF.preload('/model/gltf/glucozo.gltf');
  function Model(props) {
    const { scene, animations } = useGLTF('/model/gltf/glucozo.gltf');
    const { actions } = useAnimations(animations, scene);
    useEffect(() => {
      // actions.animation_0.play();
      scene.traverse((obj) => obj.isMesh && (obj.receiveShadow === obj.castShadow) === true);
    }, [actions, scene]);
    return (
      <mesh>
        <primitive object={scene} {...props} />
      </mesh>
    );
  }

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
    <Page title={translate('glucozo')}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <FullScreen handle={screen}>
          <Card
            onDoubleClick={screen.enter}
            sx={{
              mb: 3,
              height: heightCard,
              position: 'relative',
              backgroundImage: 'url(/images/background/bg-glucozo.jpg)',
              backgroundSize: 'cover',
            }}
          >
            <Canvas camera={{ fov: 45 }}>
              <Suspense fallback={<Loader />}>
                <Stage contactShadowOpacity={0.5}>
                  <Model />
                </Stage>
              </Suspense>
              <OrbitControls makeDefault />
            </Canvas>
            <div style={description}>
              <p>
                <strong>{translate('names.model')}:</strong> {translate('glucozo')}
                <br />
                <strong>{translate('names.author')}:</strong> {translate('glucozo_author')}
                <br />
                <strong>{translate('names.by')}:</strong> {translate('glucozo_by')}
                <br />
              </p>
            </div>
          </Card>
        </FullScreen>
      </Container>
    </Page>
  );
}
