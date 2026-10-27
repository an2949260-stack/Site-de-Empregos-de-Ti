const db = require('./db');
const bcrypt = require('bcryptjs');

// ISSO VAI APAGAR A TABELA ANTIGA COM ERRO
db.exec('DROP TABLE IF EXISTS vagas');

// ISSO VAI CRIAR A TABELA NOVA COM TODAS AS COLUNAS
db.exec(`
CREATE TABLE IF NOT EXISTS vagas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    empresa_id INTEGER NOT NULL,
    tipo TEXT NOT NULL,
    tecnologias TEXT,
    salario TEXT,
    cep TEXT,
    cidade TEXT,
    estado TEXT,
    descricao TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (empresa_id) REFERENCES empresas(id)
)`);

const senha = bcrypt.hashSync('123456', 10);

db.prepare(
`
INSERT OR IGNORE INTO empresas (id, nome, email, senha_hash)
VALUES (1, 'TechNova', 'contato@technova.com', ?)
`
).run(senha);

db.prepare(
`INSERT INTO vagas (titulo, empresa_id, tipo, tecnologias, salario, descricao)
VALUES (?, ?, ?, ?, ?, ?)
`
).run(
    'Desenvolvedor Python',
    1, 
    'Remoto',
    'React, Node.js, Python',
    'R$ 6.000,00 - R$ 10.000,00',
    'Vaga para desenvolvedor Python com experiência em React e Node.js.'
);

console.log('Seed finalizado com sucesso!');