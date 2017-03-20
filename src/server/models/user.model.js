import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    studentCode: {
        type: Number,
        required: true,
    },
    account: {
        type: Boolean,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    failRating: {
        type:Number,
        default: 0
    },
    // 대회용
    contestScore: {
        type: Number,
        default: 0
    },
    contestAccount: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('User', UserSchema);