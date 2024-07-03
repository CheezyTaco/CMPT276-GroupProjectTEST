import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  MenuItem,
  Menu,
  Avatar,
  Tooltip,
  Link
} from '@mui/material';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import { useUser, UserTypes } from '../user-context/user-context';

const userPages = ['Calendar', 'Routes'];
const adminPages = ['Alerts', 'Schedule'];
const settings = ['Profile', 'Settings', 'Logout'];

/**
 * Project-wide navigation bar
 * @returns NavBar react component
 */
export function NavBar() {
  const { user } = useUser();

  const pages =
    user?.userType === UserTypes.Admin
      ? [...userPages, ...adminPages]
      : userPages;

  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setUserMenuAnchor(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
      <Toolbar>
        <Link
          href="/"
          underline="none"
          color="secondary"
          sx={{
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'flex-start',
            flex: 1
          }}
        >
          <DirectionsTransitIcon sx={{ marginRight: 1 }} />
          <Typography variant="h6" component="div">
            Route Alert
          </Typography>
        </Link>

        <Box display="flex" justifyContent="center" gap={4} flex={1}>
          {pages.map((page) => (
            <Link
              key={page}
              href={`/${page.toLowerCase()}`}
              color="secondary"
              underline="none"
              textTransform="uppercase"
            >
              {page}
            </Link>
          ))}
        </Box>

        <Box display="flex" justifyContent="flex-end" flex={1}>
          {user ? (
            <>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                id="menu-appbar"
                anchorEl={userMenuAnchor}
                open={!!userMenuAnchor}
                onClose={handleCloseUserMenu}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                sx={{ mt: '45px' }}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link
                      href={`/${setting.toLowerCase()}`}
                      underline="none"
                      sx={{
                        color: 'black',
                        '&:hover': { fontWeight: 'bold' }
                      }}
                    >
                      {setting}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              <Link
                href="/login"
                component={Button}
                color="secondary"
                underline="none"
                textTransform="none"
              >
                Log In
              </Link>
              <Link
                href="/register"
                component={Button}
                color="secondary"
                underline="none"
                textTransform="none"
              >
                Sign Up
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
