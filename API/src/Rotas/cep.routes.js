const { Router } = require('express');

const router = Router();

router.get('/:cep', async (req, res) => {
    const cep = String(req.params.cep).replace(/\D/g, '');

    if (cep.length !== 8) {
        return res.status(400).json({
            status: 'error',
            message: 'CEP inválido'
        });
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const endereco = await response.json();

        if (endereco.erro) {
            return res.status(404).json({
                status: 'error',
                message: 'CEP não encontrado'
            });
        }

        return res.json(endereco);
    } catch (error) {
        return res.status(502).json({
            status: 'error',
            message: 'Falha ao consultar o CEP'
        });
    }
});

module.exports = router;
