import { Box, Typography } from "@mui/material";
import SocialMediaButtons from "./SocialMediaButtons";

const Footer = () => {
    return (
        <Box height={100} sx={{ mt: 8 , backgroundColor: 'primary.main', display: "flex", justifyContent:{ xs: 'center',sm: 'space-around', md: 'space-between'}, alignItems: 'center', p: 2, width: '100%' }}>
            <Typography variant="body1" component='div' fontSize={13} >
                Created by Fryderyk Jellinek
            </Typography>
        <SocialMediaButtons />
        </Box>
    )
   
}

export default Footer