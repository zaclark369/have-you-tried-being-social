const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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
        ref: 'User'
      }
      ],
    },
{
    toJSON: {
        virtuals: true,
        
      },
    id: false,
}
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

// create model using schema
const User = model('User', userSchema);

// export
module.exports =  User;