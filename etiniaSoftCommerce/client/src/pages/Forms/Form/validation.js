export default function Validation(input){
    let errors={}
//Name
if(!input.name){errors.name = "Este campo es obligatorio"};
if(input.name.length > 50){errors.name = "El nombre debe estar por debajo de 50 caracteres"};


//Description

if(input.description.length > 250){errors.description = "Hasta 250 caracteres"};

//Color
if(!input.color){errors.color="Este campo es obligatorio"};
//Brand
if (!input.brand.trim()) {errors.brand = 'Este campo es obligatorio';}
//Price
if(!input.price){errors.price="Seleccione un precio"};

//Category
if (!input.category.trim()) {  errors.category = 'Este campo es obligatorio';}
    
return errors;
}