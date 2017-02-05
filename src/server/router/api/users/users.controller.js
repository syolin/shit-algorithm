import mongoose from 'mongoose';
import model from '../../../models/user.model';
import crypto from 'crypto';

const User = mongoose.model('User');

User.create = (username, userId, password, studentCode) => {
    const user = new User({
        username,
        userId,
        password,
        studentCode
    });

    return user.save();
};

User.findOneByUserId = userId => {
    return User.findOne({
        userId
    }).exec();
};

User.passwordHash = password => {
    const passwordHash = crypto.createHash("sha512").update(password).digest("hex");

    return passwordHash;
};

export default User;
