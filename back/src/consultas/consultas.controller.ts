import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateCosultaDTO } from "./dto/consultas.dto";

import { ConsultasService } from "./consultas.service";
import { Consultas } from './interfaces/consultas.interfaces';


@Controller('consultas')
export class ConsultasController {

    constructor(private consultasServices:ConsultasService){}

    // Add Consulta: /consulta/
    @Post('/')
    async createPost(@Res() res, @Body() createConsultaDTO: CreateCosultaDTO){
        console.log(createConsultaDTO)
        const consulta = await this.consultasServices.createConsulta(createConsultaDTO)
        return res.status(HttpStatus.OK).json({
            message:"Consulta creada",
            consulta
        })
    }

    // Get Consulta /consultas
    // @Get('/list')
    @Get('/')
    async getConsultas(@Res() res) {
        const consultas = await this.consultasServices.getConsultas();
        return res.status(HttpStatus.OK).json({
            message:"Todas las Consultas",
            consultas
        });
    }

    // GET single consulta: /consultas/one
    @Get('/one')
    async getConsulta(@Res() res) {
        const consultas = await this.consultasServices.getConsulta();
        if (!consultas) throw new NotFoundException('No hay mas Consultas!');
        return res.status(HttpStatus.OK).json({
            message:"Una Consulta",
            consultas
        });
    }

    // Delete Consulta: /:id
    @Delete('/:id')
    async deleteProduct(@Res() res, @Param('id') consultaID) {
        const consultaDeleted = await this.consultasServices.deleteConsulta(consultaID);
        if (!consultaDeleted) throw new NotFoundException('Consulta does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Consulta Deleted ',
            consultaDeleted
        });
    }

    // Update Consulta: /:id
    @Put('/:id')
    async updateProduct(@Res() res, @Body() createConsultaDTO: CreateCosultaDTO, @Param('id') consultaID) {
        const updatedConsulta = await this.consultasServices.updateConsulta(consultaID, createConsultaDTO);
        if (!updatedConsulta) throw new NotFoundException('Consulta does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Consulta Updated Successfully',
            updatedConsulta 
        });
    }

}
