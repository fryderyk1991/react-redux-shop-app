import { Box, Typography } from "@mui/material";
import SocialMediaButtons from "./SocialMediaButtons";

const Footer = () => {
    return (
        <Box height={100} sx={{ backgroundColor: 'primary.main', display: "flex", justifyContent:{ xs: 'center',sm: 'space-around', md: 'space-between'}, alignItems: 'center' , p: 2 }}>
            <Typography variant="body1" component='div'>
                Created by Fryderyk Jellinek
            </Typography>
        <SocialMediaButtons />
        </Box>
    )
   
}

export default Footer