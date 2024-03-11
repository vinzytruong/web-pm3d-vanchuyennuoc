import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html } from '@react-three/drei';

// @mui
import { Box, Card, Container, CircularProgress, Typography, Button, Grid } from '@mui/material';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
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
export default function TransportWaterInPlants() {
  const { themeStretch } = useSettings();

  const { translate } = useLocales();

  // set full screen
  const screen = useFullScreenHandle();
  const [heightCard, setHeightCard] = useState('83vh');
  const [srcModel,setSrcModel]=useState('/model/gltf/vcntc_close.gltf')
  const [isSlice,setIsSlice]=useState(false)
  const isFull = screen.active;
  useEffect(() => {
    if (isFull === false) {
      setHeightCard('83vh');
    } else setHeightCard('100vh');
  }, [heightCard, setHeightCard, isFull]);

  useGLTF.preload(isSlice ? '/model/gltf/vcntc_open.gltf':'/model/gltf/vcntc_close.gltf');
  function Model(props) {
    const { scene, animations } = useGLTF(isSlice ? '/model/gltf/vcntc_open.gltf':'/model/gltf/vcntc_close.gltf');
    const { actions } = useAnimations(animations, scene);
    useEffect(() => {
      actions.animation_0.play();
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
    <Page title={translate('transport_water_in_plants')}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <FullScreen handle={screen}>
          <Card
            onDoubleClick={screen.enter}
            sx={{
              mb: 3,
              height: heightCard,
              position: 'relative',
              bgcolor: '#000',
            }}
          >
            <Canvas
              dpr={[1, 2]}
              style={{ marginTop: '40px' }}
              camera={{ fov: 45, near: 0.1, far: 4000, position: [0, 0, 50] }}
            >
              <Suspense fallback={<Loader />}>
                <Stage>
                  <Model />
                </Stage>
              </Suspense>
              <OrbitControls makeDefault />
            </Canvas>
            <div style={description}>
              <p>
                <strong>{translate('names.model')}:</strong> {translate('transport_water_in_plants')}
                <br />
                <strong>{translate('names.author')}:</strong> {translate('transport_water_in_plants_author')}
                <br />
                <strong>{translate('names.by')}:</strong> {translate('transport_water_in_plants_by')}
                <br />
              </p>
            </div>
            <Box sx={{ position: 'absolute', bottom: 30, right: 30 }}>
              <Grid container gap={2}>
                <Button variant='contained' onClick={()=>setIsSlice(!isSlice)}>{isSlice?'Cắt lớp':'Không cắt'}</Button>
              </Grid>
            </Box>
          </Card>
        </FullScreen>
      </Container>
    </Page>
  );
}
