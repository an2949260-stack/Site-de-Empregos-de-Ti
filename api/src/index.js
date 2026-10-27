const express = require('express');
const cors = require('cors');

const vagasRoutes = require('./routes/controllers/vagas.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        status: 'success',
        message: 'API funcionando 🚀',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        projeto: 'Dev-jobs API',
        timestamp: new Date().toISOString()
    });
});

app.use('/api', vagasRoutes);

app.use((req, res) => {
    return res.status(404).json({
        status: 'error',
        message: 'Rota não encontrada'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});