import { Box, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const SocialMediaButtons = () => {
  return (
   <Box>
     <IconButton href="https://www.linkedin.com/in/fryderyk-jellinek/">
            <LinkedInIcon />
        </IconButton>
        <IconButton href="https://github.com/fryderyk1991">
            <GitHubIcon />
        </IconButton>
   </Box>
  )
}

export default SocialMediaButtons