import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './footer.module.css';
import { theme } from '../../..';

export function Footer() {
  return (
    <Box
      className={styles.footer}
      sx={{ background: theme.palette.primary.main }}
    >
      <Typography variant="body1" className={styles.text}>
        Created by: Harold Chang, Tingyu Chen, Taewoong Choi, Alex Chung,
        Vladislav Mironov
      </Typography>
      <Typography variant="body2" className={styles.text}>
        &copy; {new Date().getFullYear()} Route Alert. All rights reserved.
      </Typography>
    </Box>
  );
}
