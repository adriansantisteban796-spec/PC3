function Universidad({ universidad }) {
  return (
    <li style={{ border: '1px solid #ccc', padding: '12px', marginBottom: '10px', borderRadius: '6px' }}>
      <h3 style={{ margin: '0 0 6px 0' }}>{universidad.name}</h3>
      <p style={{ margin: '0 0 6px 0', color: '#555' }}>
        Dominio: {universidad.domains?.join(', ')}
      </p>
      {universidad.web_pages?.[0] && (
        <a href={universidad.web_pages[0]} target="_blank" rel="noreferrer">
          Visitar sitio web
        </a>
      )}
    </li>
  );
}

export default Universidad;
