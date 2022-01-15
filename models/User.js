const { Schema, model } = require('mongoose');
const validator = require('validator');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [isEmail, 'invalid email']
        },
        thoughts: [],
        friends: []
    }
)