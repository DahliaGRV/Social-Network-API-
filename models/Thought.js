const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create User model
const thoughtSchema = new Schema(
    {
      thoughtText: {
          type:String,
          minLength:1,
          maxLength:280,
          required:true,
      }, 
      createdAt:{
        type:Date,
        default:Date.now

      },
      username: {
        type: String,
        required: true,
      },
      reactions:[Reaction],
      
    }, 
    {
      // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
      // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
      toJSON: {
       virtuals: true,
      },
      id: false,
    }
  );

  thoughtSchema
  .virtual('ReactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });


  const Thought = model('thought', thoughtSchema);

  module.exports = Thought;