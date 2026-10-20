const db = require('./db');

const bcrypt = require('bcrypts');


const senha = bcrypt.hashSync('123456', 10);

db.prepare(
`
INSERT OR IGNORE INTO empresas (id, nome, email, senha_hash)
VALUES (1, 'TechNova', 'contato@technova.com', ?)

`
).run(senha)

db.prepare(
`INSERT INTO vagas ( titulo, empresa_id, tipo, tecnologias,salario, descricao)
VALUES (?, ?, ?, ?, ?, ?)
`
).run(
    'Desenvolvedor Python',
    'Remoto',
    'React, Node.js, Python',
    'R$ 6.000,00 - R$ 10.000,00',
    'Vaga para desenvolvedor Python com experiência em React e Node.js.'
);

console.log ('seed finalizado com sucesso!');
