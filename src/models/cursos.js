import mongoose from "mongoose";
const {Schema}=mongoose;

const schema =new Schema({
    name:{type:String, required:true},
    profesor:[{type:schema.Types.ObjetId, refs:"profesor"}]
})

export const model=mongoose.model("cursos", schema);