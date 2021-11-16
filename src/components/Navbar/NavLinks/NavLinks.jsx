import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

const NavLinks = () => {
  return (
    <List sx={{ display: 'flex' }}>
      {['About', 'Skills', 'Projects', 'Contact'].map((text, index) => (
        <ListItem button key={text}>
          <Typography
            sx={{
              fontSize: '1.3rem',
              fontFamily: 'Signika Negative',
              fontWeight: '500',
            }}
          >
            {text}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default NavLinks;
