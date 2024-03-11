import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle alt="overlay" src="/assets/overlay.svg" variants={varFade().in} />

        <HeroImgStyle
          alt="hero"
          src="/images/home/hero.png"
          variants={varFade().inUp}
        />

        <Container>
          <ContentStyle>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ color: 'common.white' }}>
                Software <br />
                3D Simulation <br /> by
                <Typography component="span" variant="h2" sx={{ color: 'primary.main' }}>
                  &nbsp;GD VIET NAM
                </Typography>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography sx={{ color: 'common.white' }}>
              Phần mềm mô phỏng 3D được xây dựng và phát triển bám sát dựa theo thông tư số 38/2021/TT-BGDĐT và 39/2021/TT-BGDĐT.
              </Typography>
            </m.div>

            <Stack spacing={2.5} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  icon={
                    <Image
                      alt="Sinh động"
                      src="/images/home/3d.png"
                      sx={{ width: 20, height: 20, mr: 1 }}
                    />
                  }
                  value={
                    <Link
                      href="/dashboard/"
                      target="_blank"
                      rel="noopener"
                      color="common.white"
                      sx={{ typography: 'body2' }}
                    >
                      Sinh động
                    </Link>
                  }
                />
              </m.div>

              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  icon={
                    <Image
                      alt="Tương tác"
                      src="/images/home/3d-modeling.png"
                      sx={{ width: 20, height: 20, mr: 1 }}
                    />
                  }
                  value={
                    <Link
                      href="/dashboard/"
                      target="_blank"
                      rel="noopener"
                      color="common.white"
                      sx={{ typography: 'body2' }}
                    >
                      Tương tác
                    </Link>
                  }
                />
              </m.div>
            </Stack>

            <m.div variants={varFade().inRight}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_DASHBOARD.root}
                startIcon={<Iconify icon={'clarity:details-line'} width={20} height={20} />}
              >
                Xem chi tiết
              </Button>
            </m.div>

            <Stack spacing={2.5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                  Tương thích đa thiết bị
                </Typography>
              </m.div>

              <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                <m.div variants={varFade().inRight}>
                  <TextIconLabel
                    icon={
                      <Image
                        alt="PC"
                        src="/images/home/computer.png"
                        sx={{ width: 30, height: 30, mr: 1 }}
                      />
                    }
                  />
                </m.div>
                <m.div variants={varFade().inRight}>
                  <TextIconLabel
                    icon={
                      <Image
                        alt="Mobile"
                        src="/images/home/mobile.png"
                        sx={{ width: 30, height: 30, mr: 1 }}
                      />
                    }
                  />
                </m.div>
                <m.div variants={varFade().inRight}>
                  <TextIconLabel
                    icon={
                      <Image
                        alt="Microsoft"
                        src="/images/home/microsoft.png"
                        sx={{ width: 30, height: 30, mr: 1 }}
                      />
                    }
                  />
                </m.div>
                <m.div variants={varFade().inRight}>
                  <TextIconLabel
                    icon={
                      <Image
                        alt="Ubuntu"
                        src="/images/home/ubuntu.png"
                        sx={{ width: 30, height: 30, mr: 1 }}
                      />
                    }
                  />
                </m.div>
                <m.div variants={varFade().inRight}>
                  <TextIconLabel
                    icon={
                      <Image
                        alt="Android"
                        src="/images/home/android.png"
                        sx={{ width: 30, height: 30, mr: 1 }}
                      />
                    }
                  />
                </m.div>
                <m.div variants={varFade().inRight}>
                  <TextIconLabel
                    icon={
                      <Image
                        alt="Apple"
                        src="/images/home/apple.png"
                        sx={{ width: 30, height: 30, mr: 1 }}
                      />
                    }
                  />
                </m.div>
              </Stack>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
