import mongoose from "mongoose";
const {Schema}=mongoose;

const schema =new Schema({
    name:{type:String, required:true},
    apellido:{type:String, required:true},
    age:{type:Number, required:true},
    cursos:[{type:schema.Types.ObjetId, refs:"cursos"}]
})

export const model=mongoose.model("estudiantes", schema);