import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import { useSelector, useDispatch } from 'react-redux';
import { setClose } from '../redux/reducers/interfaceSlice';

import { routes } from '../routes';

import { Link as ReactRouterLink } from 'react-router-dom';

const MobileNav = () => {
  const isOpen = useSelector((state) => state.interface.isOpen);
  const dispatch = useDispatch();

  const closeDrawer = () => {
    dispatch(setClose());
  };

  const DrawerList = (
    <Box sx={{ width: 250, mt: 5}} role="presentation" component='nav'>
      <List>
        {routes.map((route) => (
          <ListItem key={route.name} disablePadding sx={{ fontWeight: 600, color: 'text.secondary', textTransform: 'uppercase'}}>
            <ListItemButton component={ReactRouterLink} to={route.path} onClick={closeDrawer}>
            {route.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={isOpen} onClose={closeDrawer} anchor='right'>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default MobileNav