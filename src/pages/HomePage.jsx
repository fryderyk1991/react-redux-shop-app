import { Container } from "@mui/material";
import GridContainer from "../components/GridContainer";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig'


const HomePage = () => {

  const handleGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }
  return (
      <Container>
        <GridContainer />
        <button onClick={handleGoogle}>Sign in with Google</button>
      </Container>
  );
};

export default HomePage;
