import { Document } from "mongoose";
export interface Consultas extends Document{
    name: string;
    lastname: string;
    email: string;
    createdAt: Date;
    consulta: string;
    assigned:Boolean;
} 