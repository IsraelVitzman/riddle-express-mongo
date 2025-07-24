import jwt from 'jsonwebtoken';
//לשים בתוך ENV לא שלכוח//
//טיפול יעיעל ללקוח לבניתיים יש כאן הדפסות בדיקה
const SECRET = 'your_jwt_secret_key';

export function verifyAdmin(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        console.log("you have not tokn");
        return;
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
            return
        }

        if (decoded.role !== 'admin') {
            console.log("no accses is no admin");
            return
        }

        console.log("accses successoflly");

        next();
    });
}

export function verifyAdminOrUser(req, res, next) {
    const token =  req.headers['authorization'];

    if (!token) {
        console.log("you have not tokn");
        return
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
            return
        }

        if (decoded.role !== 'admin' && decoded.role !== 'user') {
            console.log("no accses is no admin or user");
        }
        console.log("accses successoflly");

        next();
    });
}

