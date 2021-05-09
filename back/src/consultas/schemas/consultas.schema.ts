import { Schema } from "mongoose";

export const ConsultaSchema =new Schema({
    name: String,
    lastname: String,
    email: {
        String,         
    },
    consulta: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    assigned:{
        type:Boolean,
        default:false
    },
    complete:{
        type:Boolean,
        default:false
    }

});