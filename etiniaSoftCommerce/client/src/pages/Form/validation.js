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

//Size
if(input.size.length===0){errors.size="Choose at least one Size"};

//Color
if(input.color){errors.color="Your garment needs a color"};
//Brand
if (!data.brand.trim()) {errors.brand = 'Brand is required';}
//Price
if(!input.price){errors.price="select a price for your garment!"};
if(input.price <=60.000){errors.price="enter a value greater than 60.000"};
if(input.price >100.000){errors.price="you can only enter the price from '70.000' to '100.000'"}
//Sale
if (isNaN(data.sale)) {  errors.sale = 'Sale must be a number';}
//Gender
if(input.gender.length === 0){errors.gender= "Choose at least one Gender"};
//Category
if (!data.category.trim()) {  errors.category = 'Category is required';}
 //Quantity
if (isNaN(data.quantity)) {errors.quantity = 'Quantity must be a number';}
    
return errors;
}
