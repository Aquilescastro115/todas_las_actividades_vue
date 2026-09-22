import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString, MinLength } from 'class-validator';

export const RUBROS = [
  'Apicultura',
  'Lácteos',
  'Textiles',
  'Turismo',
  'Artesanía',
  'Agricultura',
] as const;

export type Rubro = typeof RUBROS[number];

export class CreateEmprendedorDto {
  @ApiProperty({ example: 'Catedral Gifts' })
  @IsString()
  @MinLength(3)
  nombre: string;

  @ApiProperty({ example: 'Chillán' })
  @IsString()
  @IsNotEmpty()
  comuna: string;

  @ApiProperty({ enum: RUBROS })
  @IsIn(RUBROS as unknown as string[])
  rubro: Rubro;

  @ApiProperty({ example: 'Venta de souvenirs inspirados en la catedral.' })
  @IsString()
  @MinLength(10)
  descripcion: string;

  @ApiProperty({ example: 'contacto@catedral.cl o +56 9 1234 5678' })
  @IsString()
  @IsNotEmpty()
  contacto: string;
}