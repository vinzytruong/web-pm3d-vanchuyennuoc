import * as THREE from 'three';
import { capitalCase } from 'change-case';
import { useState, Suspense, useEffect, useRef, useMemo } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Stars, useGLTF, Stage, OrbitControls, useAnimations, useProgress, Html } from '@react-three/drei';
import {
    CubeTextureLoader
} from 'three';
// @mui
import { styled } from '@mui/material/styles';
import {
    Tab,
    Box,
    Card,
    Tabs,
    Container,
    CircularProgress,
    Typography
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
import useTabs from '../../hooks/useTabs';
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
}

// ----------------------------------------------------------------------

export default function Co2() {

    const { themeStretch } = useSettings();

    const { translate } = useLocales();

    useGLTF.preload('/model/gltf/co2.gltf')
    function Model(props) {
        const { scene, animations } = useGLTF('/model/gltf/co2.gltf')
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

    function Loader() {
        const { active, progress, errors, item, loaded, total } = useProgress();
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

    return (
        <Page title={translate('co2')}>
            <Container maxWidth={themeStretch ? false : 'lg'}>
                <Card
                    sx={{
                        mb: 3,
                        height: '83vh',
                        position: 'relative',
                        bgcolor: '#000',
                    }}
                >
                    <Canvas dpr={[1, 2]} camera={{ fov: 50, near: 0.1, far: 3000 }}>
                        <Suspense fallback={<Loader />}>
                            <Stage contactShadowOpacity={1}>
                                <Model />
                            </Stage>
                        </Suspense>
                        <OrbitControls makeDefault />
                    </Canvas>
                    <div style={description}>
                        <p>
                            <strong>{translate('names.model')}:</strong>  {translate('co2')}<br />
                            <strong>{translate('names.author')}:</strong> {translate('co2_author')}<br />
                            <strong>{translate('names.by')}:</strong> {translate('co2_by')}<br />
                        </p>
                    </div>
                </Card>
            </Container>
        </Page>
    );
}
