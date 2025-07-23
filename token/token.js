import jwt from 'jsonwebtoken';

const SECRET = 'your_jwt_secret_key';

export function verifyAdmin(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token.');
        }

        if (decoded.role !== 'admin') {
            return res.status(403).send('Access denied. Admins only.');
        }

        req.user = decoded;
        next();
    });
}

export function verifyAdminOrAdmin(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).send('access denied. No token provided.');
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send('invalid token.');
        }

        if (decoded.role !== 'admin' && decoded.role !== 'user') {
            return res.status(403).send('access denied. admins only.');
        }

        req.user = decoded;
        next();
    });
}


