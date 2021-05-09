import { Module } from '@nestjs/common';
import { ConsultasController } from './consultas.controller';
import { ConsultasService } from './consultas.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ConsultaSchema } from "./schemas/consultas.schema";

@Module({
  imports:[MongooseModule.forFeature([
    {name: "Consultas", schema: ConsultaSchema}
  ])],
  controllers: [ConsultasController],
  providers: [ConsultasService]
})
export class ConsultasModule {}
