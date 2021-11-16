import React, { useState, useEffect, useWindowDimensions } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NavLinks from './NavLinks/NavLinks';
import DrawerLinks from './DrawerLinks/DrawerLinks';

const Navbar = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerLinks />
    </Box>
  );

  return (
    <Box
      sx={{
        paddingTop: '15px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#E2F0F9',
        height: '60px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '5px',
          //   justifyContent: 'center',
          //   marginLeft: 'auto',
        }}
      >
        <Typography
          sx={{
            fontSize: '40px',
            fontWeight: '600',
            fontFamily: 'Signika Negative',
          }}
        >
          Coding David
        </Typography>
      </Box>

      <Box
        className='menu-btn'
        key={'right'}
        sx={{
          paddingRight: '5px',
          display: { md: 'none' },
        }}
      >
        <Button onClick={toggleDrawer('right', true)}>
          <MenuOutlinedIcon
            sx={{
              borderRadius: '5px',
              height: '50px',
              width: 'auto',
              color: 'white',
              backgroundColor: '#286FB4',
            }}
          />
        </Button>
        <SwipeableDrawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          {list('right')}
        </SwipeableDrawer>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
        <NavLinks />
      </Box>
    </Box>
  );
};

export default Navbar;
