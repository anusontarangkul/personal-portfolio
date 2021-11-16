import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const DrawerLinks = () => {
  const data = [
    { name: 'Home', icon: <HomeIcon />, aLink: '#intro' },
    { name: 'About', icon: <PersonIcon />, aLink: '#about' },
    { name: 'Skills', icon: <CheckBoxIcon />, aLink: '#skills' },
    { name: 'Projects', icon: <DesktopMacIcon />, aLink: '#projects' },
    { name: 'Contact', icon: <ContactSupportIcon />, aLink: '#contact' },
  ];

  const dataLinks = [
    { name: 'GitHub', icon: <GitHubIcon /> },
    { name: 'LinkedIn', icon: <LinkedInIcon /> },
    { name: 'YouTube', icon: <YouTubeIcon /> },
  ];
  return (
    <>
      <List sx={{ fontSize: '1rem' }}>
        {data.map((text, index) => (
          <a href={text.aLink} style={{ textDecoration: 'none' }}>
            <ListItem button key={text.name}>
              <ListItemIcon sx={{ color: 'black' }}>{text.icon}</ListItemIcon>

              <ListItemText primary={text.name} sx={{ color: 'black' }} />
            </ListItem>
          </a>
        ))}
      </List>
      <Divider />
      <List sx={{ fontSize: '1rem' }}>
        {dataLinks.map((text, index) => (
          <ListItem button key={text.name}>
            <ListItemIcon sx={{ color: 'black' }}>{text.icon}</ListItemIcon>

            <ListItemText primary={text.name} sx={{ color: 'black' }} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
};

export default DrawerLinks;
