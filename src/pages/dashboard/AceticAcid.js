import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html } from '@react-three/drei';
import { Box, Card, Container, CircularProgress, Typography } from '@mui/material';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
// hooks
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
};

// ----------------------------------------------------------------------

export default function AceticAcid() {
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

  useGLTF.preload('/model/gltf/acetic-acid.glb');
  function Model(props) {
    const { scene, animations } = useGLTF('/model/gltf/acetic-acid.glb');
    const { actions } = useAnimations(animations, scene);
    console.log(actions);
     
    useEffect(() => {
      // conssole.log(actions.animation_0.play());
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
  function onScreenChange() {
    const isFull = screen.active;
    if (isFull)
      return screen.exit();
    if (!isFull)
      return screen.enter();
  }
  return (
    <Page title={translate('acid_acetic')}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <FullScreen handle={screen}>
          <Card
            onDoubleClick={() => onScreenChange()}
            sx={{
              mb: 3,
              height: heightCard,
              position: 'relative',
              backgroundImage: 'url(/images/background/bg-acetic-acid.jpg)',
              backgroundSize: 'cover',
            }}
          >
            <Canvas camera={{ fov: 55 }}>
              <Suspense fallback={<Loader />}>
                <Stage contactShadowOpacity={1}>
                  <Model />
                </Stage>
              </Suspense>
              <OrbitControls makeDefault />
            </Canvas>
            <div style={description}>
              <p>
                <strong>{translate('names.model')}:</strong> {translate('acid_acetic')}
                <br />
                <strong>{translate('names.author')}:</strong> {translate('acetic_acid_author')}
                <br />
                <strong>{translate('names.by')}:</strong> {translate('acetic_acid_by')}
                <br />
              </p>
            </div>
          </Card>
        </FullScreen>
      </Container>
    </Page>
  );
}
