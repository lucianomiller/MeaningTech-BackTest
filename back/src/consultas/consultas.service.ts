import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Consultas } from "./interfaces/consultas.interfaces";
import { CreateCosultaDTO } from "./dto/consultas.dto";

@Injectable()
export class ConsultasService {

    

    constructor(@InjectModel('Consultas') private readonly consultasModel: Model<Consultas>){}

    async getConsultas(): Promise<Consultas[]>{
        const consultas = await this.consultasModel.find()
        return consultas
    }

    async getConsulta():Promise<Consultas>{
        const consultas = await this.consultasModel.findOne({assigned:false,complete:false})
        return consultas
    }

    async createConsulta(createConsultaDTO:CreateCosultaDTO):Promise<Consultas>{
       const consulta= new this.consultasModel(createConsultaDTO) 
       return await consulta.save()       
    }

    async deleteConsulta(consultaID:string):Promise<Consultas>{
        const deletedConsulta = await this.consultasModel.findByIdAndDelete(consultaID)
        return deletedConsulta
    }
    async updateConsulta(consultaID:string,createConsultaDTO:CreateCosultaDTO):Promise<Consultas>{

       const  updateConsulta = await this.consultasModel.findByIdAndUpdate(consultaID, createConsultaDTO, {new:true})
       return updateConsulta
    }
}
