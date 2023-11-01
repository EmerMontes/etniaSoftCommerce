import axios from "axios";


const URL = "http://localhost:3001";

const getFindSelects = async () => {
            
        let allCategories = [];
        let allColors = [];
        let allSize = [];
       
        const productsInfo = (await axios.get(`${URL}/products/all-products`)).data;
        console.log(productsInfo)
        //obtiene todos los selects y quita espacios
        for (let i=0; i<productsInfo.length; i++){
            allCategories.push(productsInfo[i].category?.trim());
            allColors.push(productsInfo[i].color?.trim());
            allSize.push(productsInfo[i].size?.trim());
        }  
 
        //quita los repetidos
        let setCategories = new Set (allCategories);
        let categoriesSinRepetidos = Array.from(setCategories);
        
        let setColors = new Set (allColors);
        let colorsSinRepetidos = Array.from(setColors);
        
        let setSizes = new Set (allSize);
        let sizesSinRepetidos = Array.from(setSizes);

        //los organiza alfabeticamente
        let sortedCategories = categoriesSinRepetidos.sort();
        console.log(sortedCategories)
        

        let sortedColors=colorsSinRepetidos.sort();
        console.log(sizesSinRepetidos)
        
        //los organiza talla menor a mayor
        let sortedSize = [];
        for (let size of sizesSinRepetidos){
            if (size === 'XS') sortedSize.push(size)
        }
        for (let size of sizesSinRepetidos){
            if (size === 'S') sortedSize.push(size)
        }
        for (let size of sizesSinRepetidos){
            if (size === 'M') sortedSize.push(size)
        }
        for (let size of sizesSinRepetidos){
            if (size === 'L') sortedSize.push(size)
        }
        for (let size of sizesSinRepetidos){
            if (size === 'XL') sortedSize.push(size)
        }
        for (let size of sizesSinRepetidos){
            if (size === 'XXL') sortedSize.push(size)
        }

        console.log(sortedSize)

       return ({category: sortedCategories, color: sortedColors, size: sortedSize});
            
           
}

export default getFindSelects;