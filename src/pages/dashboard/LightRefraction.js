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


    const style = {
        padding: '10px',
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
    const [tiatoi, setTiaToi] = useState([[0, 0, 0], [-6, 2, 0]])
    const [tiakhucxa, setTiaKhucXa] = useState([[0, 0, 0], [6, -2, 0]])
    const setGoc30 = () => {
        setTiaToi([[0, 0, 0], [-4, 2, 0]])
        setTiaKhucXa([[0, 0, 0], [6, -12, 0]])
    }
    const setGoc60 = () => {
        setTiaToi([[0, 0, 0], [-4, 4, 0]])
        setTiaKhucXa([[0, 0, 0], [6, -4, 0]])
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
                            <center>
                                <Button style={{ marginLeft: '10px', marginTop: '25px', backgroundColor: '#fff', color: '#000' }} onClick={() => setGoc30()}>
                                    Góc 30 độ
                                </Button>
                                <Button style={{ marginLeft: '10px', marginTop: '25px', backgroundColor: '#fff', color: '#000' }} onClick={() => setGoc60()}>
                                    Góc 60 độ
                                </Button>
                            </center>
                        </CardContent>
                    </RootStyle>
                    <Card
                        onDoubleClick={screen.enter}
                        sx={{
                            mb: 3,
                            height: heightCard,
                            position: 'relative',
                            backgroundImage: 'url(/images/background/bg_nerve.png.jpg)',
                            backgroundSize: "cover",
                        }}
                    >
                        <Canvas >
                            <mesh>
                                <Line
                                    points={[
                                        [-20, 0, 0],
                                        [20, 0, 0],
                                    ]}
                                    lineWidth={2}
                                    color={0xFFFFFF}
                                />
                            </mesh>

                            <Line
                                points={tiatoi}
                                color={0xFF0000}
                                lineWidth={4}
                            />
                            <Line
                                points={tiakhucxa}
                                color={'green'}
                                lineWidth={4}
                            />
                            <Line
                                points={[
                                    [0, -20, 0],
                                    [0, 20, 0],
                                ]}
                                color={0xFFFFFF}
                            />

                        </Canvas>
                        <div style={description}>
                            <p>
                                <strong>{translate('names.model')}:</strong>  {translate('light_refraction')}<br />
                                <strong>{translate('names.author')}:</strong> {translate('light_refraction_author')}<br />
                                <strong>{translate('names.by')}:</strong> {translate('light_refraction_by')}<br />
                            </p>
                        </div>
                    </Card>
                </FullScreen>
            </Container>
        </Page>
    );
}
