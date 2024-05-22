import { Box, FormControl, InputLabel, OutlinedInput, FormHelperText, Button, Typography, Link} from '@mui/material'

import { Link as ReactRouterLink } from "react-router-dom";

import { authFields } from '../helpers/formFields';
import { validation, validateInput } from '../helpers/formValidation';

import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useState } from 'react';

import { showLoginError } from '../helpers/showLoginError';

const Login = () => {
  const logInputs = [ ...authFields ];
  const loginFields = [logInputs[0], logInputs[2]];

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [authErr, setAuthErr] = useState('')

  const handleSignIn = async () => {
    const { email, password } = values;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch(error) {
      // const errorMessage = error.message;
      // alert(errorMessage)
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      const showAuthErr = showLoginError(error);
      setAuthErr(showAuthErr);
      console.log(showAuthErr)
    }
    
  } 
  
  const handleFieldChange = e => {
    const { name, value } = e.target;
  
    setValues(prevValues => ({
        ...prevValues,
        [name]: value,
    }));
    const error = validateInput(name, loginFields, value);
    setErrors(prevState => ({
          ...prevState,
          [name]: error
  }));
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    const errors = validation(values, loginFields);
    setErrors(errors)
    if(Object.keys(errors).length === 0) {
      handleSignIn()
        setValues(prevValues => ({
         ...prevValues,
         email: '',
         password: '',
       }))
    }
  } 

  const inputs = loginFields.map((field, key) => (
    <FormControl key={key} sx={{ width: "100%", my: 1.8, position: 'relative' }}>
    <InputLabel htmlFor={field.label}>{field.label}</InputLabel>
    <OutlinedInput
      name={field.name}
      label={field.label}
      type={field.type}
      onChange={handleFieldChange}
      value={values[field.name]}
      sx={{
        "& fieldset": {
          borderColor: errors[field.name] && "red"
        },
      }}
    />
    {errors[field.name] && (
      <FormHelperText sx={{ color: "red", fontWeight: 500, position: 'absolute', bottom: -20, ml: 1}}>
        {errors[field.name]}
      </FormHelperText>
    )}
  </FormControl>
))

  return (
    <Box sx={{ textAlign: 'center', my: 5}}>
       <Typography variant="h6" aria-label="logo" fontSize='32px'>SFJ</Typography>
    <Box
    component="form"
    sx={{maxWidth: 300, mx: 'auto', my: 2}}
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}
  >
  {inputs}    
    <Button type='submit' variant='contained' sx={{mt: 3, width: '100%', textTransform: 'capitalize', "&:hover": { backgroundColor: 'primary.main'}, color: 'white'}}>Log in</Button>
  </Box>
  <Typography variant='subtitle' sx={{mt: 2}}>Don&apos;t have an account? <Link variant='subtitle' component={ReactRouterLink} to='/auth/signup' sx={{ textDecoration: 'none', fontWeight: 600, cursor: 'pointer'}}>Sign up</Link></Typography>
  </Box>
  )
}


export default Login