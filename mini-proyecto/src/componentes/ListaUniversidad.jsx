import Universidad from './Universidad';

function ListaUniversidad({ universidades }) {
  if (universidades.length === 0) {
    return <p>No se encontraron universidades con ese criterio.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {universidades.map((uni, index) => (
        <Universidad key={index} universidad={uni} />
      ))}
    </ul>
  );
}

export default ListaUniversidad;
