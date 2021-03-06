import jwt from 'jsonwebtoken';
import compose from 'composable-middleware';

const auth = {
    signToken : (user, secret) => {
        return new Promise((resolve, reject) => {
            jwt.sign(
                {
                    username: user.username,
                    userId: user.userId,
                    studentCode: user.studentCode,
                    score: user.score,
                    rating: user.rating
                },
                secret,
                {
                    expiresIn: '1d'
                }, (err, token) => {
                    if (err) reject(err);
                    resolve(token);
                });
        });
    },
    isAuthenticated : (rating) => {
        return compose()
            .use((req, res, next) => {
                // const token = req.cookies.userToken;
                const token = req.headers.authorization;
                if (token) {
                    const secret = req.app.get('jwt-secret');
                    try {
                        const decode = jwt.verify(token, secret);
                        req.user = decode;
                        req.user.token = token

                        next();
                    } catch (error) {
                        res.status(403).json({
                            result: 'error',
                            message: error.message
                        });
                    }
                } else {
                    res.status(403).json({
                        result: 'error',
                        message: 'not token'
                    });
                }
            })
            .use((req, res, next) => {
                req.user = {
                    userId: req.user.userId,
                    username: req.user.username,
                    studentCode: req.user.studentCode,
                    score: req.user.score,
                    rating: req.user.rating
                };

                if (rating == 'admin') {
                    if (req.user.rating >= 2) {
                        next();
                    } else {
                        res.status(403).json({
                            result: 'error',
                            message: 'not admin'
                        });
                    }
                } else {
                    next();
                }


            });
    },
    checkAdmin : () => {
        return compose()
            .use((req, res, next) => {
                if (req.user.rating >= 2) {
                    next();
                } else {
                    res.status(403).json({
                        result: 'error',
                        message: 'not admin'
                    });
                }
            });
    },
};

export default auth