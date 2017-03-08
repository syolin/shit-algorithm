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

Resolve.findSpecificResolve = (condition,value) => {
    if (condition == "num") return Resolve.find({problemNum : value});
    if (condition == "userId") return Resolve.find({userId : value});

    return false;
}

Resolve.findAll = () => {
    return Resolve.find().exec();
};

Resolve.findOneByNum = num => {
    return Resolve.findOne({
        num
    }).exec();
};

export default Resolve;
