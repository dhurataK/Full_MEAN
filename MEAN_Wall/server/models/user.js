const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {Schema} = mongoose;

var usersSchema = new Schema({
    first_name: {
        type: String,
        required: [true,'First name should not be blank'],
        minlength:2
    },
    last_name: {
        type: String,
        required: [true,'Last name should not be blank'],
        minlength:2
    },
    email: {
        type: String,
        unique: [true, 'Email field should not be blank'],
        required: true
    },
    password: {
        type: String,
        required:[true, 'Password should not be blank'],
        minlength:8,
        maxlength:32
    },
    birthday: {
        type: Date,
        required: [true, 'Birthday should not be blank']
    },
    _messages:[{
      type:Schema.Types.ObjectId,
      ref:'Message'
    }],
    _comments:[{
      type:Schema.Types.ObjectId,
      ref:'Comment'
    }]
}, {timestamps: true});

usersSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
usersSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

usersSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});

module.exports = mongoose.model('User', usersSchema);
