// routes
import { PATH_AUTH, PATH_DASHBOARD, PATH_PAGE } from '../../routes/paths';
// components
import { PATH_AFTER_LOGIN } from '../../config';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Trang chủ',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Mô hình',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: PATH_DASHBOARD.root,
  },
];

export default menuConfig;
