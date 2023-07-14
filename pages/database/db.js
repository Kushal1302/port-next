import mongoose from "mongoose";
try {
    mongoose.connect(process.env.Mongo_URI , {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => console.log("Connection Success"))
    
} catch (error) {
    console.log({"Error":error.message})
}