import { useState, useEffect } from 'react';
import Header from './componentes/Header';
import Buscador from './componentes/Buscador';
import ListaUniversidad from './componentes/ListaUniversidad';

function App() {
  const [universidades, setUniversidades] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('http://universities.hipolabs.com/search?country=Peru')
      .then((res) => res.json())
      .then((data) => {
        setUniversidades(Array.isArray(data) ? data : []);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setCargando(false);
      });
  }, []);

  const universidadesFiltradas = universidades.filter((uni) => {
    const termino = busqueda.toLowerCase();
    const coincideNombre = uni.name?.toLowerCase().includes(termino);
    const coincideDominio = uni.domains?.some((d) => d.toLowerCase().includes(termino));
    return coincideNombre || coincideDominio;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <Header total={universidadesFiltradas.length} />
      <Buscador busqueda={busqueda} alBuscar={setBusqueda} />
      {cargando ? (
        <p>Cargando universidades...</p>
      ) : (
        <ListaUniversidad universidades={universidadesFiltradas} />
      )}
    </div>
  );
}

export default App;