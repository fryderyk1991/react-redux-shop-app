import { Box, FormControl, InputLabel, OutlinedInput, FormHelperText, Button, Typography, Link} from '@mui/material'

import { Link as ReactRouterLink } from "react-router-dom";

import { authFields } from '../helpers/formFields';
import { validation, validateInput } from '../helpers/formValidation';

import { useState } from 'react';

const Login = () => {
  const logInputs = [ ...authFields ];
  const loginFields = [logInputs[0], logInputs[2]];

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
      /// zrob cos jesli formularz  bedzie ok 
        setValues(prevValues => ({
         ...prevValues,
         email: '',
         username: '',
         password: '',
       }))
    }
  } 

  const inputs = loginFields.map((field, key) => (
    <FormControl key={key} sx={{ width: '100%', mb: 1}}>
      <InputLabel htmlFor={field.label}>{field.label}</InputLabel>
        <OutlinedInput name={field.name} label={field.label} type={field.type}  onChange={handleFieldChange} value={values[field.name]}/>
        {errors[field.name] && (
            <FormHelperText sx={{color: 'red'}}>{errors[field.name]}</FormHelperText>
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
    <Button type='submit' variant='contained' sx={{mt: 2, width: '100%', textTransform: 'capitalize', "&:hover": { backgroundColor: 'primary.main'}, color: 'white'}}>Log in</Button>
  </Box>
  <Typography variant='subtitle' sx={{mt: 2}}>Don&apos;t have an account? <Link variant='subtitle' component={ReactRouterLink} to='/auth/signup' sx={{ textDecoration: 'none', fontWeight: 600, cursor: 'pointer'}}>Sign up</Link></Typography>
  </Box>
  )
}


export default Login