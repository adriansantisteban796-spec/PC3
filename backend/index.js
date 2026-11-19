import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/items', async (req, res) => {
  try {
    const response = await fetch('http://universities.hipolabs.com/search?country=Peru');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las universidades' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
