const { Router } = require('express');

const router = Router();

router.post('/login', (req, res) => {
    return res.status(501).json({
        status: 'error',
        message: 'Autenticação ainda não implementada'
    });
});

router.post('/register', (req, res) => {
    return res.status(501).json({
        status: 'error',
        message: 'Cadastro ainda não implementado'
    });
});

module.exports = router;
