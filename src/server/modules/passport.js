import passport from 'passport';
import passportLocal from 'passport-local';

const LocalStrategy = passportLocal.Strategy;

export default () => {
    passport.serializeUser((user, done) => {
        done(null,  user)
    });

    passport.desrializeUser((user, done) => {
        done(null, user)
    });

    passport.use(new LocalStrategy({
        useridField : 'id'
    }, (id, password, done) => {
        Users.findOne({ id : id }, (findError, user) => {
            if (!user) return done(null, false, {message: "존재하지 않는 아이디입니다"});

            return user.comparePassword(passport, (passError, isMatch) => {
                if (isMatch) {
                    return done(null, user);
                }
                return done(null, false, { message: "비밀번호가 틀림"});
            });
        });
    }));
};
