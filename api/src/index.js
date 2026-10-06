const express = require('express');
const app = express();

// Middleware para processar requisições com corpo em JSON
app.use(express.json());

// Rota raiz de status da API
app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'API funcionando 🚀',
    timestamp: new Date().toISOString()
  });
});

// Tratamento de rota não encontrada (404)
app.use((req, res) => {
  return res.status(404).json({
    status: 'error',
    message: 'Rota não encontrada'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});