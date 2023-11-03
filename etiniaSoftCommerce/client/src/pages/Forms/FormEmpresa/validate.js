const validate = (state) => {
    const errors = {};
    
    const patronEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    const patronCharact = /^[a-zA-Z0-9\s]+$/;
    const patronNumerico = /^[0-9]+$/;
    
    
    if (!state.name) errors.name = 'Este campo es requerido'
    if (!patronCharact.test((state.name))) errors.name = 'Caracteres especiales no son permitidos en el nombre'
    if (state.name.length > 250){
      errors.name = 'El nombre debse ser menor a 250 caracteres';
    }
    if(!state.email) errors.email = 'Este campo es requerido'
    if (!patronEmail.test(state.email)) errors.email = 'En el email debe corresponder a una dirección de correo'
    if (state.email.length > 250){
      errors.email = 'El nombre debe ser menor a 250 caracteres';
    }
   
    if(!state.phone) errors.phone = 'Este campo es requerido' 
    if (!patronNumerico.test(state.phone)) errors.phone = 'El teléfono debe ser numérico'
    if (state.phone.length > 15) {
        errors.phone = 'El campo debe ser menor a 15 digitos'
    }

    
    return errors;
}

export default validate;