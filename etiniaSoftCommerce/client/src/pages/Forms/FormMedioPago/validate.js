const validate = (state) => {
    const errors = {};
    
  
    
    if (!state.name) errors.name = 'Este campo es requerido'
    if (state.name.length > 250){
      errors.name = 'El nombre debe ser menor a 250 caracteres';
    }
   
    
    return errors;
}

export default validate;