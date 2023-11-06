const { BankAccounts, Company, PaymentMethod, Logistics } = require("../db");


const getEmpresa = async () => {
  
  const productsDB = await Company.findAll();
  return productsDB;
};

// const createEmpresa = async (empresaData) => {
//   try {
//     const {
//       id,
//       name,
//       brand,
//       gender,
//       size,
//       color,
//       sale,
//       category,
//       img,
//       description,
//       price,
//       quantity,
//     } = productData;

//     const newProduct = await Company.create({

//       id,
//       name,
//       brand,
//       gender,
//       size,
//       color,
//       sale,
//       category,
//       img,
//       description,
//       price,
//       quantity,
//     });
    
//     return newProduct;
//   } catch (error) {
//     console.log(error)
//     throw error;
//   }
// };
// const deleteProductById = async (id) => {
//   try {
//     const productToDelete = await Products.findByPk(id);

//     if (!productToDelete) {
//       throw new Error(`Producto con ID ${id} no encontrado.`);
//     }

//     await productToDelete.destroy();

//     return `Producto con ID ${id} eliminado exitosamente.`;
//   } catch (error) {
//     throw error;
//   }
// };

const updateEmpresaById = async (id, newData) => {
  try {
    const empresaToUpdate = await Company.findByPk(id);

    if (!empresaToUpdate) {
      throw new Error(`Empresa con ID ${id} no encontrado.`);
    }

    // Actualiza los campos de la empresa con los nuevos datos
    await empresaToUpdate.update(newData);

    return empresaToUpdate;
  } catch (error) {
    throw error;
  }
};

const getCuentas = async () => {
  
  const cuentasDB = await BankAccounts.findAll();
  return cuentasDB;
};

const createCuentas = async (cuentaData) => {
  try {
    const {
      accountNumber,
      bank,
      clientName,
      typeOfAccount
    } = cuentaData;

    const model = await BankAccounts.findAll();
    const nextID = (model[model.length-1].id) + 1;
    id = nextID
    const newCuenta = await BankAccounts.create({
      id,
      accountNumber,
      bank,
      clientName,
      typeOfAccount
    });
    
    return newCuenta;
  } catch (error) {
    console.log(error)
    throw error;
  }
};
const deleteCuentaById = async (id) => {
  try {
    const cuentaToDelete = await BankAccounts.findByPk(id);

    if (!cuentaToDelete) {
      throw new Error(`Cuenta con ID ${id} no encontrado.`);
    }

    await cuentaToDelete.destroy();

    return `Cuenta con ID ${id} eliminado exitosamente.`;
  } catch (error) {
    throw error;
  }
};

const updateCuentaById = async (id, newData) => {
  try {
    const cuentaToUpdate = await BankAccounts.findByPk(id);

    if (!cuentaToUpdate) {
      throw new Error(`Cuenta con ID ${id} no encontrada.`);
    }

    // Actualiza los campos de la cuenta con los nuevos datos
    await cuentaToUpdate.update(newData);

    return cuentaToUpdate;
  } catch (error) {
    throw error;
  }
}
  const getMedioPago = async () => {
  
    const medioDB = await PaymentMethod.findAll();
    return medioDB;
  };
  
  const createMedioPago = async (medioData) => {
    try {
      const {
        paymentMethod,
      } = medioData;
  
      const model = await PaymentMethod.findAll();
      const nextID = (model[model.length-1].id) + 1;
      id = nextID
      const newCuenta = await PaymentMethod.create({
        id,
        paymentMethod
      });
      
      return newCuenta;
    } catch (error) {
      console.log(error)
      throw error;
    }
  };
  const deleteMedioPagoById = async (id) => {
    try {
      const medioToDelete = await PaymentMethod.findByPk(id);
  
      if (!medioToDelete) {
        throw new Error(`Medio de Pago con ID ${id} no encontrado.`);
      }
  
      await medioToDelete.destroy();
  
      return `Medio de Pago con ID ${id} eliminado exitosamente.`;
    } catch (error) {
      throw error;
    }
  };
  
  const updateMedioPagoById = async (id, newData) => {
    try {
      const medioToUpdate = await PaymentMethod.findByPk(id);
  
      if (!medioToUpdate) {
        throw new Error(`Medio de Pago con ID ${id} no encontrada.`);
      }
  
      // Actualiza los campos del medio de pago con los nuevos datos
      await medioToUpdate.update(newData);
  
      return medioToUpdate;
    } catch (error) {
      throw error;
    }
  }

  const getTransportadora = async () => {
  
    const shipmentsDB = await Logistics.findAll();
    return shipmentsDB;
  };
  
  const createTransportadora = async (logisticData) => {
    try {
      const {
        email,
        name,
        location,
        phone,
        shippingPrice
      } = logisticData;
  
      const model = await Logistics.findAll();
      const nextID = (model[model.length-1].id) + 1;
      id = nextID
      const newCuenta = await Logistics.create({
        id,
        email,
        name,
        location,
        phone,
        shippingPrice
      });
      
      return newCuenta;
    } catch (error) {
      console.log(error)
      throw error;
    }
  };
  const deleteTransportadoraById = async (id) => {
    try {
      const logisticToDelete = await Logistics.findByPk(id);
  
      if (!logisticToDelete) {
        throw new Error(`Transportadora con ID ${id} no encontrada.`);
      }
  
      await logisticToDelete.destroy();
  
      return `Transportadora con ID ${id} eliminada exitosamente.`;
    } catch (error) {
      throw error;
    }
  };
  
  const updateTransportadoraById = async (id, newData) => {
    try {
      const logisticToUpdate = await Logistics.findByPk(id);
  
      if (!logisticToUpdate) {
        throw new Error(`Transportadora con ID ${id} no encontrada.`);
      }
  
      // Actualiza los campos de la cuenta con los nuevos datos
      await logisticToUpdate.update(newData);
  
      return logisticToUpdate;
    } catch (error) {
      throw error;
    }
  }
  
module.exports = {
    getEmpresa,
    //createEmpresa,
    //deleteEmpresaById,
    updateEmpresaById,
    getCuentas,
    createCuentas,
    deleteCuentaById,
    updateCuentaById,
    getMedioPago,
    createMedioPago,
    deleteMedioPagoById,
    updateMedioPagoById,
    getTransportadora,
    createTransportadora,
    deleteTransportadoraById,
    updateTransportadoraById
};