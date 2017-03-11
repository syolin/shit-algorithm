import mongoose from 'mongoose';
import model from '../../../models/problem.model';

const Problem = mongoose.model('Problem');

// 문제 등록
Problem.create = (problemName, source, explanation, score, problemData) => {
    const problem = new Problem({
        problemName,
        source,
        explanation,
        score,
        problemData,
    });

    return problem.save();
};

Problem.findAll = () => {
    return Problem.find()
        .select('num problemName source score').sort({num:1});
};

Problem.findOneByProblem = num => {
    return Problem.findOne({
        num
    }).exec();
};

Problem.updateOne = (form) => {
    return Problem.update({num: form.problemNum}, form);
};

Problem.deleteOne = (num) => {
    Problem.remove({num : num});
    return Problem.update({num: num+1}, {num: num});
};



export default Problem;
