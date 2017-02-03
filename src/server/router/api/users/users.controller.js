import mongoose from 'mongoose';
import model from '../../../models/user.model';

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

User.verify = password => {
    return this.password === password
};

export default User;