const mongoose = require("mongoose");
// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;






const IdeaSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true
    }

})

const UserSchema = new Schema ({
    userName: {
        type: String,
        required: true
      },

   password:{
        type: String,
        required: true

   },

   Ideas: [IdeaSchema]
});




const UserModel = mongoose.model('User', UserSchema)
const IdeaModel = mongoose.model('Idea', IdeaSchema)

// Export each model so they can be required elsewhere
module.exports = {
    UserModel: UserModel,
    IdeaModel: IdeaModel
}