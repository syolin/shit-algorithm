import mongoose from 'mongoose';
import resolveModel from '../../../models/resolve.model';

const Resolve = mongoose.model('Resolve');

/**
 * 결과 제출
 * @param string userId
 * @param object resolveData
 * @returns query
 */
Resolve.create = (userId, resolveData) => {
    const resolve = new Resolve({
        userId,
        resolveData
    });

    return resolve.save();
};

/**
 * 결과 성공 여부 확인
 * @param string user
 * @param number num
 * @returns {*|Query|{}|T}
 */
Resolve.findSuccess = (user, num) => {
    return Resolve.find({userId : user, 'resolveData.problemNum' : num});
};

/**
 * 특정 조건으러 결과값 반환
 * @param string condition
 * @param number,string value
 * @returns object
 */
Resolve.findSpecificResolve = (condition,value) => {
    if (condition == "num") return Resolve.find({'resolveData.problemNum' : value});
    if (condition == "success") return Resolve.find({'resolveData.result': 'success', userId: value}).select('resolveData.problemNum resolveData.result resolveData.date');

    return false;
};

/**
 * 모든 결과값 반환
 * @param boolean auth
 * @returns object
 */
Resolve.findAll = (auth) => {
    if(auth) return Resolve.find().sort({num: -1});
    return Resolve.find().select('userId resolveData.problemNum resolveData.result resolveData.date resolveData.problemType').sort({num: -1});
};

/**
 * 해당 번호 결과값 반환
 * @param number num
 * @returns object
 */
Resolve.findOneByNum = num => {
    return Resolve.findOne({
        num
    }).exec();
};

export default Resolve;
