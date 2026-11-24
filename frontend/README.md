# DevJobs

Projeto web full-stack com frontend estático e API Node.js/Express.

## Estrutura

```text
api/
├── src/
│   ├── banco de dados/
│   │   ├── db.js
│   │   └── seed.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── Rotas/
│   │   ├── auth.routes.js
│   │   ├── cep.routes.js
│   │   └── vagas.routes.js
│   └── server.js
├── package.json
└── package-lock.json

frontend/
├── css/
├── js/
│   └── script.js
└── index.html
```

## Executar

### Frontend

Abra `frontend/index.html` no navegador ou use uma extensão de servidor estático.

### API

```powershell
cd api
npm install
npm start
```

A API ficará disponível em `http://localhost:3000`. As principais rotas são:

- `GET /api/health`
- `GET /api/vagas`
- `POST /api/vagas`
- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/cep/:cep`

O banco SQLite local é criado automaticamente em `api/devjobs.db` e não é enviado ao Git.
