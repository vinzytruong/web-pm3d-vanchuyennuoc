import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';
import useFetchData from 'src/hooks/useFetchData';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => {
  useFetchData('https://minimal-assets-api-dev.vercel.app');

  return (
    <>
      <Helmet>
        <title>{`${title} | GD Việt Nam`}</title>
        {meta}
      </Helmet>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
