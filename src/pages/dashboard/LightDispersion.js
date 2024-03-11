import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
// import { useProgress, Html } from '@react-three/drei';
import { Line } from "@react-three/drei";
import { styled } from '@mui/material/styles';

// @mui
import {
    Box,
    Card,
    Container,
    CircularProgress,
    Typography, CardContent, Button
} from '@mui/material';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
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
}

// ----------------------------------------------------------------------
function Scene() {

    return (
        <>
            <mesh > <coneGeometry args={[0.65, 1.65, 4]} /></mesh>
        </>
    )
}
export default function LightRrefraction() {
    const RootStyle = styled(Card)(({ theme }) => ({
        boxShadow: 'none',
        textAlign: 'center',
        backgroundColor: '#ccc',
        [theme.breakpoints.up('md')]: {
            height: '10%',
            display: 'flex',
            textAlign: 'left',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 0,
            paddingLeft: '80px'
        },
    }));

    const [color, setColor] = useState(0xFFFFFF)
    const [colorRed, setColorRed] = useState(0xFF0000)
    const [colorOrgane, setColorOrgane] = useState(0xFFA500)
    const [colorYellow, setColorYelow] = useState(0xFFFF00)
    const [colorGreen, setColorGreen] = useState(0x008000)
    const [colorBlue, setColorBlue] = useState(0x0000FF)
    const [colorIndigo, setColorIndigo] = useState(0xEE82EE)
    const [colorViolet, setColorViolet] = useState(0x4B0082)
    const setWhite = () => {
        setColor(0xFFFFFF)
        setColorRed(0xFF0000)
        setColorOrgane(0xFFA500)
        setColorYelow(0xFFA500)
        setColorGreen(0x008000)
        setColorBlue(0x0000FF)
        setColorIndigo(0xEE82EE)
        setColorViolet(0x4B0082)
    }
    const setRed = () => {
        setColor(0xFF0000)
        setColorRed(0xFF0000)
        setColorGreen(0x000000)
        setColorYelow(0x000000)
        setColorBlue(0x000000)
        setColorIndigo(0x000000)
        setColorViolet(0x000000)
        setColorOrgane(0x000000)
    }
    const setOrgane = () => {
        setColor(0xFFA500)
        setColorRed(0x000000)
        setColorGreen(0x000000)
        setColorYelow(0x000000)
        setColorBlue(0x000000)
        setColorIndigo(0x000000)
        setColorViolet(0x000000)
        setColorOrgane(0xFFA500)
    }
    const setBlue = () => {
        setColor(0x0000FF)
        setColorRed(0x000000)
        setColorGreen(0x000000)
        setColorYelow(0x000000)
        setColorBlue(0x0000FF)
        setColorIndigo(0x000000)
        setColorViolet(0x000000)
        setColorOrgane(0x000000)
    }

    const setYellow = () => {
        setColor(0xFFFF00)
        setColorRed(0x000000)
        setColorGreen(0x000000)
        setColorYelow(0xFFFF00)
        setColorBlue(0x000000)
        setColorIndigo(0x000000)
        setColorViolet(0x000000)
        setColorOrgane(0x000000)
    }
    const setIndigo = () => {
        setColor(0xEE82EE)
        setColorRed(0x000000)
        setColorGreen(0x000000)
        setColorYelow(0x000000)
        setColorBlue(0x000000)
        setColorIndigo(0xEE82EE)
        setColorViolet(0x000000)
        setColorOrgane(0x000000)
    }
    const setViolet = () => {
        setColor(0x4B0082)
        setColorRed(0x000000)
        setColorGreen(0x000000)
        setColorYelow(0x000000)
        setColorBlue(0x000000)
        setColorIndigo(0x000000)
        setColorViolet(0x4B0082)
        setColorOrgane(0x000000)
    }
    const setGreen = () => {
        setColor(0x008000)
        setColorRed(0x000000)
        setColorGreen(0x008000)
        setColorYelow(0x000000)
        setColorBlue(0x000000)
        setColorIndigo(0x000000)
        setColorViolet(0x000000)
        setColorOrgane(0x000000)
    }

    const { themeStretch } = useSettings();

    const { translate } = useLocales();


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


    return (
        <Page title={translate('light_refraction')}>
            <Container maxWidth={themeStretch ? false : 'lg'}>
                <FullScreen handle={screen}>
                    <RootStyle>
                        <CardContent
                            sx={{
                                p: { md: 0 },
                                pl: { md: 5 },
                                color: '#fff',
                                fontFamily: 'Tahoma',
                            }}
                        >
                            <Button style={{ marginLeft: '10px', marginTop: '25px', backgroundColor: '#fff', color: '#000' }} onClick={() => setWhite()}>
                                TS trắng
                            </Button>
                            <Button variant="contained" color="error" style={{ marginLeft: '10px', marginTop: '25px' }} onClick={() => setRed()}>
                                TS đỏ
                            </Button>
                            <Button variant="contained" color="warning" style={{ marginLeft: '10px', marginTop: '25px' }} onClick={() => setOrgane()}>
                                TS cam
                            </Button>
                            <Button style={{ marginLeft: '10px', marginTop: '25px', backgroundColor: '#FFFF00', color: '#000' }} onClick={() => setYellow()}>
                                TS vàng
                            </Button>
                            <Button variant="contained" color="success" style={{ marginLeft: '10px', marginTop: '25px' }} onClick={() => setGreen()}>
                                TS xanh lá
                            </Button>
                            <Button variant="contained" color="primary" style={{ marginLeft: '10px', marginTop: '25px' }} onClick={() => setBlue()}>
                                TS xanh dương
                            </Button>
                            <Button style={{ marginLeft: '10px', marginTop: '25px', backgroundColor: '#EE82EE', color: '#000' }} onClick={() => setIndigo()}>
                                TS chàm
                            </Button>
                            <Button style={{ marginLeft: '10px', marginTop: '25px', backgroundColor: '#4B0082', color: '#000' }} onClick={() => setViolet()}>
                                TS tím
                            </Button>
                        </CardContent>
                    </RootStyle>
                    <Card
                        onDoubleClick={screen.enter}
                        sx={{
                            mb: 3,
                            height: heightCard,
                            position: 'relative',
                            backgroundSize: "cover",
                            backgroundColor:'#000'
                        }}
                    >
                        <Canvas >
                            <Line
                                points={[
                                    [-6, 0, 0],
                                    [0, 0, 0],
                                ]}
                                lineWidth={4}
                                color={color}
                            />
                            <Line
                                points={[
                                    [0, 0, 0],
                                    [10, -1, 0],
                                ]}
                                lineWidth={4}
                                color={colorRed}
                            />
                            <Line
                                points={[
                                    [0, 0, 0],
                                    [20, -3, 0],
                                ]}
                                lineWidth={4}
                                color={colorOrgane}
                            />
                            <Line
                                points={[
                                    [0, 0, 0],
                                    [20, -5, 0],
                                ]}
                                lineWidth={4}
                                color={colorYellow}
                            />
                            <Line
                                points={[
                                    [0, 0, 0],
                                    [20, -7, 0],
                                ]}
                                lineWidth={4}
                                color={colorGreen}
                            />
                            <Line
                                points={[
                                    [0, 0, 0],
                                    [20, -9, 0],
                                ]}
                                lineWidth={4}
                                color={colorBlue}
                            />
                            <Line
                                points={[
                                    [0, 0, 0],
                                    [20, -11, 0],
                                ]}
                                lineWidth={4}
                                color={colorIndigo}
                            />
                            <Line
                                points={[
                                    [0, 0, 0],
                                    [20, -13, 0],
                                ]}
                                lineWidth={4}
                                color={colorViolet}
                            />
                            <Line
                                points={[
                                    [0, -20, 0],
                                    [0, 20, 0],
                                ]}
                                color={0xcccccc}
                            />
                            {/* <Plane>
                    <meshBasicMaterial color="white" />
                </Plane> */}
                            <Scene />
                        </Canvas>
                        <div style={description}>
                            <p>
                                <strong>{translate('names.model')}:</strong>  {translate('light_dispersion')}<br />
                                <strong>{translate('names.author')}:</strong> {translate('light_dispersion_author')}<br />
                                <strong>{translate('names.by')}:</strong> {translate('light_dispersion_by')}<br />
                            </p>
                        </div>
                    </Card>
                </FullScreen>
            </Container>
        </Page>
    );
}
