import mongoose from "moongose";

const MONGODB_URI=process.env.MONGODB_URI;

mongoose.connet(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(db=>console.log("data is conect"))
.cath(err => console.log(err))

