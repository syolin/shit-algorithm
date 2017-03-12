import mongoose from 'mongoose';
import model from '../../../models/problem.model';

const Problem = mongoose.model('Problem');

// 문제 등록
Problem.create = (problemName, source, explanation, score, type, problemData) => {
    const problem = new Problem({
        problemName,
        source,
        explanation,
        score,
        type,
        problemData,
    });

    return problem.save();
};

Problem.findAll = () => {
    return Problem.find()
        .select('num problemName source score type').sort({num:1});
}

Problem.findOneByProblem = num => {
    return Problem.findOne({
        num
    }).exec();
};

Problem.updateSortNum = (num) => {
    Problem.update({num: {$gt: num}}, {$inc: {num: -1}}, {multi: true},function(err, result){});
};

Problem.updateWantNum = (num) => {
    return Problem.update({num: {$gt: num}}, {$inc: {num: -1}}, {multi: true});
};

Problem.updateOne = (form) => {
    return Problem.update({num: form.problemNum}, form);
};

Problem.deleteOne = (num) => {
    return Problem.remove({num : num});
};



export default Problem;
