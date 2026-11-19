function Universidad({ universidad }) {
  return (
    <li
      style={{
        padding: '12px',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div>
        <strong>{universidad.name}</strong>
        <div style={{ fontSize: '14px', color: '#555' }}>
          {universidad.domains?.join(', ')}
        </div>
      </div>
      {universidad.web_pages?.[0] && (
        <a
          href={universidad.web_pages[0]}
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0066cc', textDecoration: 'none' }}
        >
          Visitar web
        </a>
      )}
    </li>
  );
}

export default Universidad;