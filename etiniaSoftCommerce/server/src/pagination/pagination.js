function paginate(data, page, itemsPerPage) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
  
    return data.slice(startIndex, endIndex);
  }
  
  module.exports = {
    paginate,
  };