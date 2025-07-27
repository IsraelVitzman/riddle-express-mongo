import jwt from 'jsonwebtoken';


const SECRET = 'your_jwt_secret_key';

export function verifyAdmin(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        console.log("you have not tokn");
        res.json({message:"you have not tokn"});
        return;
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
            res.json({message:err});
            return
        }
        console.log(decoded.role);

        if (decoded.role !== 'admin') {
            console.log("no accses is no admin");
            res.json({ messege: "no accses is no admin " })
            return
        }

        console.log("accses successoflly");

        next();
    });
}

export function verifyAdminOrUser(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        console.log("you have not tokn");
        res.json({message:"you have not tokn"});
        return
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
            res.json({message:err});
            return
        }

        if (decoded.role !== 'admin' && decoded.role !== 'user') {
            console.log("no accses is no admin or user");
            res.json({ messege: "no accses is no admin or user" })
            return
        }
        console.log("accses successoflly");

        next();
    });
}

