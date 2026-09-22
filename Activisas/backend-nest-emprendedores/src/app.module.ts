import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Emprendedor } from './emprendedores/entities/emprendedor.entity';
import { EmprendedoresModule } from './emprendedores/emprendedores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'data.db',
      entities: [Emprendedor],
      synchronize: true,
    }),
    EmprendedoresModule,
  ],
})
export class AppModule {}