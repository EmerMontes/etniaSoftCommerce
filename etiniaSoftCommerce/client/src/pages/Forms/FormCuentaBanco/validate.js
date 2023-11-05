const validate = (state) => {
    const errors = {};
    
    const patronCharact = /^[a-zA-Z0-9\s]+$/;
    const patronNumerico = /^[0-9]+$/;
    
    
    if (!state.clientName) errors.clientName = 'Este campo es requerido'
    if (!patronCharact.test((state.clientName))) errors.clientName = 'Caracteres especiales no son permitidos en el nombre'
    if (state.clientName.length > 250){
      errors.clientName = 'El nombre debse ser menor a 250 caracteres';
    }
    if(!state.bank) errors.bank = 'Este campo es requerido'
    if (state.bank.length > 250){
      errors.bank = 'Debe ser menor a 250 caracteres';
    }
   
    if(!state.accountNumber) errors.accountNumber = 'Este campo es requerido' 
    if (!patronNumerico.test(state.accountNumber)) errors.accountNumber = 'El campo debe ser numérico'
    if (state.accountNumber.length > 50) {
        errors.accountNumber = 'El campo debe ser menor a 50 digitos'
    }

    
    return errors;
}

export default validate;