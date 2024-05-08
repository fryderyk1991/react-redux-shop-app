import { Box, FormControl, InputLabel, FormHelperText, OutlinedInput, Button, Typography, Link} from '@mui/material';

import { Link as ReactRouterLink } from "react-router-dom";

import { authFields } from '../helpers/formFields';
import { validation, validateInput } from '../helpers/formValidation';

import { useState } from 'react';


// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Signup = () => {
const [values, setValues] = useState({
  email: '',
  username: '',
  password: '',
});
const [errors, setErrors] = useState({});

const handleFieldChange = e => {
  const { name, value } = e.target;

  setValues(prevValues => ({
      ...prevValues,
      [name]: value,
  }));
  const error = validateInput(name, authFields, value);
  setErrors(prevState => ({
    errors: {
        ...prevState.errors,
        [name]: error
    }
}));
}

const handleSubmit = e => {
  e.preventDefault();

  const errors = validation(values, authFields);
  setErrors({
      errors: errors,
  })

  if(Object.keys(errors).length === 0) {
    /// zrob cos jesli formularz  bedzie ok 
      setValues(prevValues => ({
       ...prevValues,
       email: '',
       username: '',
       password: '',
     }))
  }
} 


  const inputs = authFields.map((field, key) => (
      <FormControl key={key} sx={{ width: '100%', mb: 1}}>
        <InputLabel htmlFor={field.label}>{field.label} </InputLabel>
          <OutlinedInput name={field.name} label={field.label} type={field.type} onChange={handleFieldChange} value={values[field.name]}/>
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
    {/* <FormControl sx={{ width: '100%', mb: 1}}>
      <InputLabel htmlFor="email">Email</InputLabel>
      <OutlinedInput
        id="email"
        label="Email"
        type='email'/>
    </FormControl>
    <FormControl  sx={{ width: '100%', mb: 1}}>
      <InputLabel htmlFor="username">Username</InputLabel>
      <OutlinedInput
        id="username"
        label="Username"
        type="text"
      />
    </FormControl>
    <FormControl  sx={{ width: '100%', mb: 1}}>
      <InputLabel htmlFor="password">Password</InputLabel>
      <OutlinedInput
        id="password"
        label="Password"
        type="password"
      />
    </FormControl> */}
    <Button type='submit' variant='contained' sx={{mt: 2, width: '100%', textTransform: 'capitalize', "&:hover": { backgroundColor: 'primary.main'}, color: 'white'}}>Sign Up</Button>
  </Box>
  <Typography variant='subtitle' sx={{mt: 2}}>Have an account? <Link variant='subtitle' component={ReactRouterLink} to='/auth/login' sx={{ textDecoration: 'none', fontWeight: 600, cursor: 'pointer'}}>Log in</Link></Typography>
  </Box>
  )
}

export default Signup  
