import {Box, List, ListItem, ListItemButton, ListItemIcon} from "@mui/material"
import { routes } from "../routes";
import { Link as ReactRouterLink } from "react-router-dom";

import { useSelector } from 'react-redux';
import { favoritesAmount } from '../redux/reducers/favoriteSlice';
import { cartAmount } from '../redux/reducers/cartSlice';

const DesktopNav = () => {
  const favAmount = useSelector(favoritesAmount)
  const cAmount = useSelector(cartAmount)
  return (
      <Box sx={{ display: { md: "block", xs: 'none', sm: 'none'}, mr: 5}}>
        <List sx={{ display: 'flex'}}>
          {routes.map((route) => (
            <ListItem 
              key={route.name}
              disablePadding
              sx={{
                fontWeight: 500,
              }}
            >
              <ListItemButton 
                component={ReactRouterLink}
                to={route.path}
              >
                  <ListItemIcon sx={{ color: 'primary.main', minWidth: '35px'}}>
                <route.icon />
                {(route.name === 'Favorite' || route.name === 'Cart') && (
                  <Box sx={{position: 'absolute', left: '10%', top: '50%', color: 'white', width: '18px', height: '18px', backgroundColor: 'red', borderRadius: '50%', textAlign: 'center', lineHeight: '18px', fontSize: '13px'}}>{route.name === 'Favorite' ? favAmount : cAmount}</Box>
                )}
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