import PropTypes from 'prop-types'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig'
import { useNavigate } from "react-router-dom";

import { setLoading, LoginUser } from "../redux/reducers/userSlice";
import { useDispatch } from 'react-redux';

const SiginGoogle = ({children}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleGoogle = async () => {
       dispatch(setLoading(true))
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
            navigate('/')
        } catch(error) {
          console.error("Error during sign-in with Google", error)
        } finally {
          dispatch(setLoading(false))
        }
    
      }
  return (
    <div onClick={handleGoogle}>
    {children}
    </div>
  )
}

SiginGoogle.propTypes = {
    children: PropTypes.object.isRequired
} 

export default SiginGoogle