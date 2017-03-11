import mongoose from 'mongoose';
import resolveModel from '../../../models/resolve.model';

const Resolve = mongoose.model('Resolve');

// Resolve
Resolve.create = (userId, resolveData) => {
    const resolve = new Resolve({
        userId,
        resolveData
    });

    return resolve.save();
};

Resolve.findSuccess = (user, num) => {
    return Resolve.find({userId : user, 'resolveData.problemNum' : num});
};

Resolve.findSpecificResolve = (condition,value) => {
    if (condition == "num") return Resolve.find({'resolveData.problemNum' : value});

    return false;
};

Resolve.findAll = (auth) => {
    if(auth) return Resolve.find().exec();
    return Resolve.find().select('userId resolveData.problemNum resolveData.result resolveData.date');
};

Resolve.findOneByNum = num => {
    return Resolve.findOne({
        num
    }).exec();
};

export default Resolve;
