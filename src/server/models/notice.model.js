import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

import config from '../config';

const Schema = mongoose.Schema

const connection = mongoose.createConnection(config.mongodbUri);

autoIncrement.initialize(connection);


const NoticeSchema = new Schema({
    num: {
        type: Number,
        required: true,
    },
    noticeName: {
        type: String,
        required: true,
    },
    contents: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

NoticeSchema.plugin(autoIncrement.plugin, { model: 'Notice', field: 'num'});

export default mongoose.model('Notice', NoticeSchema);