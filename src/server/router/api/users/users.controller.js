import mongoose from 'mongoose';
import model from '../../../models/user.model';
import crypto from 'crypto';

const User = mongoose.model('User');

// 유저 등록
User.create = (username, userId, password, studentCode, account) => {
    const user = new User({
        username,
        userId,
        password,
        studentCode,
        account
    });

    return user.save();
};

// 유저 정보 검색
User.findOneByUserId = userId => {
    return User.findOne({
        userId
    }).exec();
};

// Password Hash
User.passwordHash = password => {
    const passwordHash = crypto.createHash("sha512").update(password).digest("hex");

    return passwordHash;
};

User.accountTrue = userId => {
    return User.update({userId: userId}, {$set: {account: true}});
};

export default User;
