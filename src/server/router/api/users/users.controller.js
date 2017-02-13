import mongoose from 'mongoose';
import model from '../../../models/user.model';
import crypto from 'crypto';

const User = mongoose.model('User');

// 유저 등록
User.create = (username, userId, password, studentCode, account, rating) => {
    const user = new User({
        username,
        userId,
        password,
        studentCode,
        account,
        rating
    });

    return user.save();
};

User.findAll = () => {
    return User.find();
};

// 유저 정보 검색
User.findOneByUserId = userId => {
    return User.findOne({
        userId
    }).exec();
};

User.findSpecificUser = condition => {
    if(condition == 'account') return User.find({account : false});

    return false;
}

// Password Hash
User.passwordHash = password => {
    const passwordHash = crypto.createHash("sha512").update(password).digest("hex");

    return passwordHash;
};

User.accountTrue = userId => {
    // return User.update({userId: userId}, {$set: {account: true}});

    User.update({userId: userId}, {$set:{account:true}});
};



export default User;
