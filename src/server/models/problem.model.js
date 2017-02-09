/*
 * 문제
 * - 문제 번호
 * - 문제 이름
 * - 출처
 * - 시간 제한
 * - 문제 설명
 * - 입력 예제
 * - 출력 예제
 *
 * 제출
 * - 해당 아이디 고유 번호
 * - 언어 선택
 * - 코드 공개 여부
 * - 코드
 * - 제출한 아이디
 * - 결과
 * - 메모리
 * - 시간
 * - 제출 시간
 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProblemSchema = new Schema({
    num: {
        type: Number,
        required: true,
    },
    problemName: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    explanation: {
        type: String,
        required: true,
    },
    problemInfo: {
        inputExample: String,
        outputExample: String,
        timeLimit: {
            type: Number,
            required: true,
        },
        memoryLimit: {
            type: String,
            required: true,
        }
    },
    submission: {
        success: Number,
        fail: Number,
        average: Number
    }

});

export default mongoose.model('Problem', ProblemSchema);