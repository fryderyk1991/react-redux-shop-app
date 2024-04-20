import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';


import { routes } from "../routes";
import { Link as ReactRouterLink } from "react-router-dom";

const DesktopNav = () => {
  return (
      <Box sx={{ display: { md: "block", xs: 'none', sm: 'none'}}}>
        <List sx={{ display: 'flex', flexGrow: 1 }}>
          {routes.map((route) => (
            <ListItem
              key={route.name}
              disablePadding
              sx={{
                fontWeight: 500,
              }}
            >
              <ListItemButton sx={{ ":hover": { color: 'primary.main', background: 'none' } }}
                component={ReactRouterLink}
                to={route.path}
              >
                  <ListItemIcon sx={{ color: 'primary.main', minWidth: '35px'}}>
                <route.icon />
              </ListItemIcon>
                {route.name}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
  )
}

export default DesktopNav