const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema({
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
    username: [
       { 
         type: String,
        required: true,
      }
       ],
      reactionId: [
        
      ],
    },
{
    toJSON: {
        virtuals: true,
        getters: true
      },
    id: false,
}
);

reactionSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

// create model using schema
const reaction = model('reaction', reactionSchema);

// export
module.exports =  reaction;