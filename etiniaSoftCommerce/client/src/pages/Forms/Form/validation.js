export default function Validation(input){
    let errors={}
//Name
if(!input.name){errors.name = "Your game needs a name"};
if(input.name.length > 30){errors.name = "The name has to be under 30 characters"};
if(input.name.length < 4){errors.name = "The name has to be over 5 characters"};
if(!(/^[a-zA-Z0-9\s]+$/).test(input.name)){errors.name = "Special characters are not allowed"};

//Description
if(!input.description){errors.description = "We need to know what your game is about"};
if(input.description.length < 10){errors.description = "Tell us more!"};

//Color
if(!input.color){errors.color="Your clothe needs a color"};
//Brand
if (!input.brand.trim()) {errors.brand = 'Brand is required';}
//Price
if(!input.price){errors.price="select a price for your garment!"};
if(isNaN(input.price)){errors.price="Price must be a number"};

//Sale
if (isNaN(input.sale)) {  errors.sale = 'Sale must be a number';}

//Category
if (!input.category.trim()) {  errors.category = 'Category is required';}
 //Quantity
if (isNaN(input.quantity)) {errors.quantity = 'Quantity must be a number';}
    
return errors;
}