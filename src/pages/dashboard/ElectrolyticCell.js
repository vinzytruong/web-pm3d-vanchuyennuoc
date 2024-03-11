import * as THREE from 'three';
import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html, Text } from '@react-three/drei';
// @mui

import { Box, Card, Container, CircularProgress, Typography, Button, Tooltip, ClickAwayListener } from '@mui/material';
import { Icon } from '@iconify/react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import useSettings from '../../hooks/useSettings';
import useLocales from '../../hooks/useLocales';
// components
import Page from '../../components/Page';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
export default function ElectrolyticCell() {
  const { themeStretch } = useSettings();

  const { translate } = useLocales();
  const [hovered, setHover] = useState(false);
  const [show, setShow] = useState(true);
  const [notePosition, setNotePosition] = useState([0, 0, 0]);

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

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

  // set full screen
  const screen = useFullScreenHandle();
  const [heightCard, setHeightCard] = useState('83vh');
  const isFull = screen.active;

  useEffect(() => {
    if (isFull === false) {
      setHeightCard('83vh');
    } else setHeightCard('100vh');
  }, [heightCard, setHeightCard, isFull]);
  // Note model
  const [noteDescription, setNoteDescription] = useState('');
  const note = (vectorEvent) => {
    const vector = new THREE.Vector3();
    vectorEvent.object.getWorldPosition(vector);
    console.log(vector);
    if (vector.x === 0.4897582530975342 || vector.x === 0.4897582530975343) {
      setNoteDescription('Cực dương');
      setHover(true);
      setNotePosition([-1, -1.5, 0.10809231253269064]);
    }
    if (vector.x === -0.4894552230834961 || vector.x === -0.489455223083496) {
      setNoteDescription('Cực âm');
      console.log(noteDescription);
      setHover(true);
      setNotePosition([2, -1.4, -0.7482532409847708]);
    }
    if (vector.x === 0) {
      setNoteDescription('Thùng bin');
      console.log(noteDescription);
      setHover(true);
      setNotePosition([0.5, 0, 0.10809226180289504]);
    }
  };
  const Test = () => {
    return (
      <>
        <Text color="white" anchorX="center" anchorY="middle">
          {noteDescription}
        </Text>
      </>
    );
  };

  useGLTF.preload('/model/gltf/binhdienphan.gltf');
  function Model(props) {
    const { scene, animations } = useGLTF('/model/gltf/binhdienphan.gltf');
    const { actions } = useAnimations(animations, scene);
    useEffect(() => {
      //   actions.animation_0.play();
      scene.traverse((obj) => obj.isMesh && (obj.receiveShadow === obj.castShadow) === true);
    }, [actions, scene]);
     console.log(scene)
    return (
      <mesh>
        <primitive
          object={scene}
          {...props}
          // onClick={(vectorEvent) => note(vectorEvent)}
          // onPointerOut={() => setHover(false)}
        />

        {hovered && <Html>{show ? <Note /> : null}</Html>}
      </mesh>
    );
  }
  function Content() {
    return (
      <group>
        <Model position={notePosition} />
        <Test position={notePosition} />
      </group>
    );
  }
  const Note = () => {
    return (
      <>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={noteDescription}
            >
              <Button onClick={handleTooltipOpen}>
                <Icon icon="emojione:digit-three" width="32" />
              </Button>
            </Tooltip>
          </div>
        </ClickAwayListener>
      </>
    );
  };
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
    <Page title={translate('electrolytic_cell')}>
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
            <Canvas dpr={[1, 2]} linear camera={{ fov: 50, near: 0.1, far: 3000, position: [0, 0, 50] }}>
              <Suspense fallback={<Loader />}>
                <Stage contactShadowOpacity={1}>
                  <Content />
                </Stage>
              </Suspense>
              <OrbitControls makeDefault />
            </Canvas>
            <div className="descreption" style={description}>
              <p>
                <strong>{translate('names.model')}:</strong> {translate('electrolytic_cell')}
                <br />
                <strong>{translate('names.author')}:</strong> {translate('electrolytic_cell_author')}
                <br />
                <strong>{translate('names.by')}:</strong> {translate('electrolytic_cell_by')}
                <br />
              </p>
            </div>
          </Card>
        </FullScreen>
      </Container>
    </Page>
  );
}
