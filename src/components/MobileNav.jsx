import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';


import { useSelector, useDispatch } from 'react-redux';
import { setClose } from '../redux/reducers/interfaceSlice';
import { favoritesAmount } from '../redux/reducers/favoriteSlice';
import { cartAmount } from '../redux/reducers/cartSlice';

import { routes } from "../routes";

import { Link as ReactRouterLink } from "react-router-dom";


const MobileNav = () => {
  // const user = useSelector(state => state.user.user)
  const isOpen = useSelector((state) => state.interface.isOpen);
  const favAmount = useSelector(favoritesAmount)
  const cAmount = useSelector(cartAmount)
  const dispatch = useDispatch();

  const closeDrawer = () => {
    dispatch(setClose());
  };




  const DrawerList = (
    <>
      <Box sx={{ width: 250 }} role="presentation" component="nav">
        <List sx={{ my: 5 }}>
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