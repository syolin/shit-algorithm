import mongoose from 'mongoose';
import model from '../../../models/user.model';
import crypto from 'crypto';

const User = mongoose.model('User');

/**
 * 유저 등록
 * @param string username
 * @param string userId
 * @param string password
 * @param number studentCode
 * @param boolean account
 * @param number rating
 * @returns {Promise|*|{lastScroll, elementScroll, positions}|{animation, displayType, transitionExists}|{results}|{defaults, defaultValue, defaultText, placeholderText, remoteData}}
 */
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

/**
 * 유저 승락
 * @param string userId
 * @returns {Query|*}
 */
User.accountTrue = userId => {
    // return User.update({userId: userId}, {$set: {account: true}});
    return User.updateOne({userId: userId}, {account: true});
};

/**
 * 유저 점수 업데이트
 * @param string userId
 * @param number score
 */
User.scoreUpdate = (userId,score,type) => {
    if (type == "contest") User.updateOne({userId: userId}, {$inc :{contestScore: score}},false,function(err, result){})
    else if (type == "normal") User.updateOne({userId: userId}, {$inc :{score: score}},false,function(err, result){})
};

/**
 * 대회 온 오프
 * @param boolean bool
 */
User.contestUpdate = (bool, user) => {
    if (user) return User.update({userId: user}, {$set: {contestAccount: bool}}, {multi: true},function(err, result){});
    return User.update({}, {$set: {contestAccount: bool}}, {multi: true},function(err, result){});
};

/**
 * 전체 유저 출력
 * @param boolean auth
 * @returns {Aggregate|*|Query|Array.<T>}
 */
User.findAll = (auth) => {
    if (auth) return User.find({account: true})
        .select('userId username studentCode score contestScore contestAccount failRating').sort({rating:1});
    return User.find({account: true})
        .select('username score contestScore').sort({rating:1});
};


/**
 * 해당 유저 정보 출력
 * 로그인, 회원가입
 * @param boolean auth
 * @param string userId
 * @returns {Promise}
 */
User.findOneByUserId = (userId) => {
    return User.findOne({
        userId
    }).exec();
};

/**
 * 특정한 조건의 유저 출력
 * @param string condition
 * @returns {boolean}
 */
User.findSpecificUser = condition => {
    if(condition == 'account') return User.find({account : false}).select('username userId studentCode account rating score contestScore');

    return false;
}

/**
 * 로그인 실패 레이팅 업데이트
 * @param string userId
 * @param number exe
 */
User.failRating = (userId, exe) => {
    if (exe == 0) User.updateOne({userId: userId}, {$inc : {failRating : 1}}, false, function(err, result){});
    if (exe == 1) User.updateOne({userId: userId}, {$set : {failRating : 0}}, false, function(err, result){});
};

/**
 * 개인 메소드
 * 비밀번호 해시
 * @param string password
 */
User.passwordHash = password => {
    const passwordHash = crypto.createHash("sha512").update(password).digest("hex");

    return passwordHash;
};

/**
 * 유저 삭제
 * @param string userId
 */
User.deleteOne = (userId) => {
    return User.remove({userId : userId});
};




export default User;
