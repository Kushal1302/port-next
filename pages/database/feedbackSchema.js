const { default: mongoose, mongo } = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String
})
export const Feedback = mongoose.models.feedback || mongoose.model("feedback" , feedbackSchema)