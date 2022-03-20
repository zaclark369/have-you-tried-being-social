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
    username: {        
         type: String,
        required: true,
    },
      reactionId: {
          type: Schema.Types.ObjectId,
          default: new Types.ObjectId
      },
    },
);

// export
module.exports =  reactionSchema;