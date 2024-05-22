import { Box, FormControl, InputLabel, FormHelperText, OutlinedInput, Button, Typography, Link} from '@mui/material';

import { Link as ReactRouterLink } from "react-router-dom";

import { authFields } from '../helpers/formFields';
import { validation, validateInput } from '../helpers/formValidation';
import { showLoginError } from '../helpers/showLoginError';
import { useState } from 'react';

import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "../../firebase/firebaseConfig";

import { LoginUser, setLoading } from '../redux/reducers/userSlice';

import { useDispatch } from 'react-redux';

const Signup = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState('')  

  const handleSignup = async () => {
    const { email, username, password } = values;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: username });

      onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          dispatch(
            LoginUser({
              uid: authUser.uid,
              username: authUser.displayName,
              email: authUser.email,
            })
          );
          dispatch(setLoading(false));
        } else {
          console.log('The user is not logged in');
        }
      });
    }
    catch(error) {
      const errorMessage = error.message;
      console.log(errorMessage)
       const authErr =  showLoginError(error);
       setAuthError(authErr);
       console.log(authErr)
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    const error = validateInput(name, authFields, value);
    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validation(values, authFields);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      handleSignup()
      setValues((prevValues) => ({
        ...prevValues,
        email: "",
        username: "",
        password: "",
      }));
    }
  };
  const inputs = authFields.map((field, key) => (
    <FormControl
      key={key}
      sx={{ width: "100%", my: 1.8, position: "relative" }}
    >
      <InputLabel htmlFor={field.label}>{field.label}</InputLabel>
      <OutlinedInput
        name={field.name}
        label={field.label}
        type={field.type}
        onChange={handleFieldChange}
        value={values[field.name]}
        sx={{
          "& fieldset": {
            borderColor: errors[field.name] && "red",
          },
        }}
      />
      {errors[field.name] && (
        <FormHelperText
          sx={{
            color: "red",
            fontWeight: 500,
            position: "absolute",
            bottom: -20,
            ml: 1,
          }}
        >
          {errors[field.name]}
        </FormHelperText>
      )}
    </FormControl>
  ));
  return (
    <Box sx={{ textAlign: "center", my: 5 }}>
      <Typography variant="h6" aria-label="logo" fontSize="32px">
        SFJ
      </Typography>
      <Box
        component="form"
        sx={{ maxWidth: 300, mx: "auto", my: 2 }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {inputs}
      
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            width: "100%",
            textTransform: "capitalize",
            "&:hover": { backgroundColor: "primary.main" },
            color: "white",
          }}
        >
          Sign Up
        </Button>
      </Box>
      <Typography variant="subtitle" sx={{ mt: 2 }}>
        Have an account?{" "}
        <Link
          variant="subtitle"
          component={ReactRouterLink}
          to="/auth/login"
          sx={{ textDecoration: "none", fontWeight: 600, cursor: "pointer" }}
        >
          Log in
        </Link>
      </Typography>
    </Box>
  );
};

export default Signup  
