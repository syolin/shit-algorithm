import mongoose from 'mongoose';
import model from '../../../models/notice.model';

const Notice = mongoose.model('Notice');

// 문제 등록
Notice.create = (noticeName, contents, date) => {
    const notice = new Notice({
        noticeName,
        contents,
        date
    });

    return notice.save();
};

Notice.findAll = () => {
    return Notice.find()
        .select('num noticeName date')
        .exec();
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
