import mongoose from 'mongoose';
import model from '../../../models/problem.model';

const Problem = mongoose.model('Problem');

/**
 * 문제 등
 * @param problemName
 * @param source
 * @param explanation
 * @param score
 * @param type
 * @param problemData
 * @returns {Promise|*|{lastScroll, elementScroll, positions}|{animation, displayType, transitionExists}|{results}|{defaults, defaultValue, defaultText, placeholderText, remoteData}}
 */
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

/**
 * 모든 문제 출력
 * @returns
 */
Problem.findAll = (type) => {
    return Problem.find({type: type}).select('num problemName source score type').sort({num:1});
}

/**
 * 해당 번호 문제 출력
 * @param number num
 * @returns {Promise}
 */
Problem.findOneByProblem = (num, auth) => {
    return Problem.findOne({
        num
    }).exec();
};

/**
 * 문제를 한 번호씩 앞으로 당김
 * @param number num
 */
Problem.updateSortNum = (num) => {
    Problem.update({num: {$gt: num}}, {$inc: {num: -1}}, {multi: true},function(err, result){});
};


/**
 * 문제 수정
 * @param object form
 */
Problem.updateOne = (form) => {
    return Problem.update({num: form.problemNum}, form);
};

/**
 * 문제 삭제
 * @param number num
 */
Problem.deleteOne = (num) => {
    return Problem.remove({num : num});
};



export default Problem;
