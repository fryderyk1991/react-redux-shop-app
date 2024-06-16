import { Container } from "@mui/material";
import GridContainer from "../components/GridContainer";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig'

import { useDispatch, useSelector } from "react-redux";
import { setLoading, LoginUser } from "../redux/reducers/userSlice";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
   const gridItems = useSelector(state => state.products.productsData); 
   const dispatch = useDispatch();
   const navigate = useNavigate()

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;
      dispatch(
        LoginUser({
          uid: loggedUser.uid,
          name: loggedUser.displayName,
          email: loggedUser.email,
        }))
        dispatch(setLoading(true))
        navigate('/')
    } catch(error) {
      console.error("Error during sign-in with Google", error)
    } finally {
      dispatch(setLoading(false))
    }

  }
  return (
      <Container>
         <button onClick={handleGoogle}>Sign in with Google</button>
        <GridContainer gridItems={gridItems} />
      </Container>
  );
};

export default HomePage;
