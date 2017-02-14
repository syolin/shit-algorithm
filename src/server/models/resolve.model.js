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
 * - 코드
 * - 제출한 아이디
 * - 결과
 * - 메모리
 * - 시간
 * - 제출 시간
 */

import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

import config from '../config';

const Schema = mongoose.Schema;

const connection = mongoose.createConnection(config.mongodbUri);

autoIncrement.initialize(connection);


const ResolveSchema = new Schema({
    num: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    resolveData: {
        language: {
            type: String,
            required: true,
        },
        problemNum: {
            type: Number,
            required: true,
        },
        code: String,
        result: {
            type: String,
            required: true,
        },
        memory: Number,
        time: Number
    }
});

ResolveSchema.plugin(autoIncrement.plugin, { model: 'Resolve', field: 'num'});

export default mongoose.model('Resolve', ResolveSchema);