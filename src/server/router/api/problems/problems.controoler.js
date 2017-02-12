import mongoose from 'mongoose';
import model from '../../../models/problem.model';

const Problem = mongoose.model('Problem');

// 문제 등록
Problem.create = (problemName, source, explanation, problemData) => {
    const problem = new Problem({
        problemName,
        source,
        explanation,
        problemData,
    });

    return problem.save();
};

Problem.findAll = () => {
    return Problem.find()
        .select('num problemName source')
        .exec();
};

Problem.findOneByProblem = num => {
    return Problem.findOne({
        num
    }).exec();
};





export default Problem;
