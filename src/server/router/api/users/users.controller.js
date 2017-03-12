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

User.accountTrue = userId => {
    // return User.update({userId: userId}, {$set: {account: true}});
    return User.updateOne({userId: userId}, {account: true});
};

User.scoreUpdate = (userId,score) => {
    User.updateOne({userId: userId}, {$inc :{score: score}},false,function(err, result){})
};

User.findAll = (auth) => {
    if (auth) return User.find()
        .select('userId username studentCode score').sort({rating:1});
    return User.find()
        .select('username studentCode score').sort({rating:1});
};

// 유저 정보 검색
User.findOneByUserId = userId => {
    return User.findOne({
        userId
    }).exec();
};

User.findSpecificUser = condition => {
    if(condition == 'account') return User.find({account : false}).select('username userId studentCode account rating score');

    return false;
}

User.failRating = (userId, exe) => {
    if (exe == 0) User.updateOne({userId: userId}, {$inc : {failRating : 1}}, false, function(err, result){});
    if (exe == 1) User.updateOne({userId: userId}, {$set : {failRating : 0}}, false, function(err, result){});
};

// Password Hash
User.passwordHash = password => {
    const passwordHash = crypto.createHash("sha512").update(password).digest("hex");

    return passwordHash;
};

User.deleteOne = (userId) => {
    return User.remove({userId : userId});
};




export default User;
