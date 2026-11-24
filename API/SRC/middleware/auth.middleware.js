module.exports = function authMiddleware(req, res, next) {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({
            status: 'error',
            message: 'Autenticação não fornecida'
        });
    }

    next();
};
