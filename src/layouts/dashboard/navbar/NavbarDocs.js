// @mui
import { Stack, Button, Typography } from '@mui/material';
// hooks
import useAuth from '../../../hooks/useAuth';
import useLocales from '../../../hooks/useLocales';
// routes
import { PATH_AUTH, PATH_DOCS } from '../../../routes/paths';
// assets
import { DocIllustration } from '../../../assets';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import { useState } from 'react';

// ----------------------------------------------------------------------

export default function NavbarDocs() {

  const { translate } = useLocales();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isMountedRef = useIsMountedRef();

  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate(PATH_AUTH.login, { replace: true });

      if (isMountedRef.current) {
        handleClose();
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Unable to logout!', { variant: 'error' });
    }
  };

  return (
    <Stack spacing={3} sx={{ px: 5, pb: 5, mt: 10, width: 1, textAlign: 'center', display: 'block' }}>
      <DocIllustration sx={{ width: 1 }} />

      <div>
        <Typography gutterBottom variant="subtitle1">
          {translate('by.name')}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
          {translate('by.email')}
        </Typography>
      </div>

      <Button>
        {translate('by.company')}
      </Button>
    </Stack>
  );
}
