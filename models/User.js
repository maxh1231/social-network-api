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
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: self
            }
        ]
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;