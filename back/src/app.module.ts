import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsultasModule } from './consultas/consultas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConsultasModule,
     MongooseModule.forRoot(
       "mongodb://user:user@cluster0-shard-00-00.xgiyy.mongodb.net:27017,cluster0-shard-00-01.xgiyy.mongodb.net:27017,cluster0-shard-00-02.xgiyy.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-2joo0b-shard-0&authSource=admin&retryWrites=true&w=majority",
       {useNewUrlParser:true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
