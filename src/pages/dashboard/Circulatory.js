import * as THREE from 'three';
import { useState, Suspense, useEffect, useRef, useMemo } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html } from '@react-three/drei';
import {
  Box,
  Card,
  Container,
  CircularProgress,
  Typography
} from '@mui/material';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import useSettings from '../../hooks/useSettings';
import useLocales from '../../hooks/useLocales';
// _mock_
import { _userAbout, _userFeeds, _userFriends, _userGallery, _userFollowers } from '../../_mock';
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
}

// ----------------------------------------------------------------------

export default function Circulatory() {

  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  const { themeStretch } = useSettings();

  const { translate } = useLocales();

  const mouseData = useRef([0, 0])

  useGLTF.preload('/model/gltf/circulatory.gltf')
  function Model(props) {
    const { scene, animations } = useGLTF('/model/gltf/circulatory.gltf')
    const { actions } = useAnimations(animations, scene)
    useEffect(() => {
      // actions.animation_0.play();
      scene.traverse((obj) => (obj.isMesh && (obj.receiveShadow === obj.castShadow === true)));
    }, [actions, scene])
    return (
      <mesh>
        <primitive object={scene} {...props} />
      </mesh>
    )
  }


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

  function Loader() {
    const { progress } = useProgress();
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

  function Particles({ count, mouse }) {
    const mesh = useRef()
    const light = useRef()
    const { size, viewport } = useThree()
    const aspect = size.width / viewport.width

    const dummy = useMemo(() => new THREE.Object3D(), [])
    // Generate some random positions, speed factors and timings
    const particles = useMemo(() => {
      const temp = []
      for (let i = 0; i < count; i += 1) {
        const t = Math.random() * 100
        const factor = 20 + Math.random() * 100
        const speed = 0.01 + Math.random() / 200
        const xFactor = -50 + Math.random() * 100
        const yFactor = -50 + Math.random() * 100
        const zFactor = -50 + Math.random() * 100
        temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
      }
      return temp
    }, [count])
    // The innards of this hook will run every frame
    useFrame((state) => {
      // Makes the light follow the mouse
      light.current.position.set(mouse.current[0] / aspect, -mouse.current[1] / aspect, 0)
      // Run through the randomized data to calculate some movement
      particles.forEach((particle, i) => {
        const { factor, speed, xFactor, yFactor, zFactor } = particle;
        let { t } = particle;
        // There is no sense or reason to any of this, just messing around with trigonometric functions
        particle.t += (speed / 2);
        t = particle.t;
        const a = Math.cos(t) + Math.sin(t * 1) / 20
        const b = Math.sin(t) + Math.cos(t * 2) / 20
        const s = Math.cos(t) / 2
        particle.mx += (mouse.current[0] - particle.mx) * 0.01
        particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
        // Update the dummy object
        dummy.position.set(
          (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        )
        dummy.scale.set(s, s, s)
        dummy.rotation.set(s * 5, s * 5, s * 5)
        dummy.updateMatrix()
        // And apply the matrix to the instanced item
        mesh.current.setMatrixAt(i, dummy.matrix)
      })
      mesh.current.instanceMatrix.needsUpdate = true
    })
    return (
      <>
        <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
        <instancedMesh ref={mesh} args={[null, null, count]}>
          <dodecahedronGeometry args={[0.2, 0]} />
          <meshPhongMaterial color="#FF3030" />
        </instancedMesh>
      </>
    )
  }
  function onScreenChange() {
    const isFull = screen.active;
    if (isFull)
      return screen.exit();
    if (!isFull)
      return screen.enter();
  }
  return (
    <Page title={translate('circulatory')}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <FullScreen handle={screen}>
          <Card
            onDoubleClick={() => onScreenChange()}
            sx={{
              mb: 3,
              height: heightCard,
              position: 'relative',
              backgroundImage: 'url(/images/background/bg-digestive.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          >
            <Canvas dpr={[1.5, 2]} shadows camera={{ fov: 65 }}>
              <Suspense fallback={<Loader />}>
                <Stage contactShadowOpacity={1}>
                  <Model />
                </Stage>
              </Suspense>
              <Particles count={isMobile ? 250 : 500} mouse={mouseData} />
              <OrbitControls autoRotate makeDefault />
            </Canvas>
            <div style={description}>
              <p>
                <strong>{translate('names.model')}:</strong>  {translate('circulatory')}<br />
                <strong>{translate('names.author')}:</strong> {translate('circulatory_author')}<br />
                <strong>{translate('names.by')}:</strong> {translate('circulatory_by')}<br />
              </p>
            </div>
          </Card>
        </FullScreen>
      </Container>
    </Page>
  );
}
