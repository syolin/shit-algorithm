import passport from 'passport';
import passportLocal from 'passport-local';

const LocalStrategy = passportLocal.Strategy;

const setup = () => {
    passport.use(new LocalStrategy({
        userIdField: 'userid',
        passwordField: 'password'
    },
    (userid, password, done) => {
    }

    ));
};

export { setup };
