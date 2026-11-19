function Buscador({ busqueda, alBuscar }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Buscar por nombre o dominio..."
        value={busqueda}
        onChange={(e) => alBuscar(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px', boxSizing: 'border-box' }}
      />
    </div>
  );
}

export default Buscador;
