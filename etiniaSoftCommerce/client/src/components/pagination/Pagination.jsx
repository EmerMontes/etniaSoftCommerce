import React from 'react';

function Pagination(props) {
  return (
    <div className="pagination">
      <button>&lt;</button> {/* Flecha izquierda */}
      {/* Renderiza los puntos y la página actual aquí */}
      <button>&gt;</button> {/* Flecha derecha */}
    </div>
  );
}

export default Pagination;
