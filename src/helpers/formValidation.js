export const validation = (values, fields) => {
    const errors = {};
    if(fields) {
       Object.keys(values).forEach((key) => {
          const field = fields.find(r => r.name === key);
          const value = values[key];
          if(field) {
            const error = validateInput(key, fields, value);
             if(error) {
                errors[key] = error;
             }
          }
       })
    }
    Object.keys(errors).forEach(key => {
       if (errors[key] === '') {
          delete errors[key];
       }
    });
 
    return errors;
 }
 export const validateInput = (name, fields, value) => {
    if(fields) {
       const field = fields.find(f => f.name === name);
       if(field.required && value.trim() === '') {
          return 'Field is empty!';
       }
       if(field.pattern && !field.pattern.test(value)) {
         return `Invalid ${name} format!`;
      }
    }
    return '';
 }