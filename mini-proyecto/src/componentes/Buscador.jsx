function Buscador({ busqueda, alBuscar }) {
  return (
    <input
      type="text"
      placeholder="Buscar por nombre o dominio (ej. UTP, pucp, edu.pe)..."
      value={busqueda}
      onChange={(e) => alBuscar(e.target.value)}
      style={{
        padding: '10px',
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: '20px',
        fontSize: '16px'
      }}
    />
  );
}

export default Buscador;
EOF