const express = require('express');
const {timerStamp} = require('node:console');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get ('/api/health',(req, res) => {
    res.json({
        status: 'ok',
        projeto: 'Dev-jobs API',
        timerStamp: new Date().toISOString()
    });
})

app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost: ${PORT}`);
})