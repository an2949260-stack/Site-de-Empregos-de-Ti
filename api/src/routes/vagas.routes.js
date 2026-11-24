const { Router } = require('express');
const router = Router();
const db = require('../database/db');

router.get('/', (req, res) => {
    try {
        const vagas = db.prepare(`
            SELECT v.*, e.nome AS empresa_nome
            FROM vagas v
            JOIN empresas e ON e.id = v.empresa_id
            ORDER BY v.created_at DESC
        `).all();

        res.json(vagas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar vagas no banco de dados.' });
    }
});

router.post('/', (req, res) => {
    const { titulo, empresa_id, tipo, tecnologias, salario, cep, cidade, estado, descricao } = req.body;
    
    if (!titulo || !empresa_id || !tipo) {
        return res.status(400).json({ error: 'Campos obrigatórios não fornecidos: titulo, empresa_id e tipo são obrigatórios.' });
    }

    try {
        const result = db.prepare(
            `INSERT INTO vagas (titulo, empresa_id, tipo, tecnologias, salario, cep, cidade, estado, descricao)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ).run(titulo, empresa_id, tipo, tecnologias || '', salario || '', cep || '', cidade || '', estado || '', descricao || '');

        const vagaCriada = db.prepare('SELECT * FROM vagas WHERE id = ?').get(result.lastInsertRowid);

        res.status(201).json(vagaCriada);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar a vaga.' });
    }
});

module.exports = router;