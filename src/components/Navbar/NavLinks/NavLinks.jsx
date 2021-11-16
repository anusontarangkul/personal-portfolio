import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
  const linksArray = [
    { name: 'About', aLink: '#about' },
    { name: 'Skills', aLink: '#skills' },
    { name: 'Projects', aLink: '#projects' },
    { name: 'Contact', aLink: '#contact' },
  ];
  return (
    <List sx={{ display: 'flex', paddingRight: '15px' }}>
      {linksArray.map((text, index) => (
        <a href={text.aLink} style={{ textDecoration: 'none' }}>
          <ListItem button key={text.name}>
            <Typography
              sx={{
                fontSize: '1.3rem',
                color: 'black',
                fontFamily: 'Signika Negative',
                fontWeight: '500',
              }}
            >
              {text.name}
            </Typography>
          </ListItem>
        </a>
      ))}
    </List>
  );
};

export default NavLinks;
