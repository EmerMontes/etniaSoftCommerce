const primeraMayuscula = (name) => {

    let primerletra = name.charAt(0); // sacamos la primera letra y la pasamos a mayusculas
    let mayuscula = primerletra.toUpperCase();
    let restoletras = name.slice(1); // tomamos el resto y la pasamos a minusculas
    let minusculas = restoletras.toLowerCase();
    const newname = mayuscula.concat(minusculas); //concatenamos las dos partes de name
    
    return newname
    
    }
    
    export default primeraMayuscula;