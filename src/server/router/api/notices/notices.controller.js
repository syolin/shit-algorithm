import mongoose from 'mongoose';
import model from '../../../models/notice.model';

const Notice = mongoose.model('Notice');

// 문제 등록
Notice.create = (noticeName, contents, type, date) => {
    console.log(noticeName, contents, type, date)
    const notice = new Notice({
        noticeName,
        contents,
        type,
        date
    });

    return notice.save();
};

Notice.findAll = () => {
    return Notice.find()
        .select('num noticeName type date').sort({num:1});
};

Notice.updateSortNum = (num) => {
    Notice.update({num: {$gt: num}}, {$inc: {num: -1}}, {multi: true},function(err, result){});
};

Notice.findOneByProblem = num => {
    return Notice.findOne({
        num
    }).exec();
};

Notice.updateOne = (form) => {
    return Notice.update({num: form.problemNum}, form);
};

Notice.deleteOne = (num) => {
    return Notice.remove({num : num});
};



export default Notice;
