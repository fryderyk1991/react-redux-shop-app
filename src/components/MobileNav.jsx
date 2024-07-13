import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { setClose } from '../redux/reducers/interfaceSlice';
import { favoritesAmount } from '../redux/reducers/favoriteSlice';
import { cartAmount } from '../redux/reducers/cartSlice';

import { routes } from "../routes";

import { Link as ReactRouterLink } from "react-router-dom";

import LogoutButton from './LogoutButton';

const MobileNav = () => {
  const isOpen = useSelector((state) => state.interface.isOpen);
  const user = useSelector(state => state.user.user);
  const favAmount = useSelector(favoritesAmount)
  const cAmount = useSelector(cartAmount)
  const dispatch = useDispatch();

  const closeDrawer = () => {
    dispatch(setClose());
  };


  const DrawerList = (
    <>
      <Box sx={{ width: 250 }} role="presentation" component="nav">
        <List sx={{ my: 8 }}>
          {routes.map((route) => (
            <ListItem
              key={route.name}
              disablePadding
              sx={{
                fontWeight: 600,
              }}
            >
              <ListItemButton
                component={ReactRouterLink}
                to={route.path}
                onClick={closeDrawer}
              >
                 <ListItemIcon sx={{ color: 'primary.main', minWidth: '40px', position: 'relative'}}>
                <route.icon />
                {(route.name === 'Favorite' || route.name === 'Cart') && (
                  <Box sx={{position: 'absolute', left: '0',top: '60%', color: 'white', width: '15px', height: '15px', backgroundColor: 'red', borderRadius: '50%', textAlign: 'center', lineHeight: '15px', fontSize: '12px'}}>{route.name === 'Favorite' ? favAmount : cAmount}</Box>
                )}
              </ListItemIcon>
                {route.name}
              </ListItemButton>
            </ListItem>
          ))}
              {user && (
             <LogoutButton/>
          )}
        </List>
      </Box>
    </>
  );

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={closeDrawer}
        anchor="right"
        sx={{ display: { md: "none" } }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
};

export default MobileNav