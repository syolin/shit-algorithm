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
    }
    // problems: {
    //     code: Number,
    //     result: String,
    // }

});

export default mongoose.model('User', UserSchema);