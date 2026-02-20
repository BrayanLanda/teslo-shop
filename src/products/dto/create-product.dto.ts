import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'The title of the product',
    example: 'T-Shirt Teslo',
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    description: 'The price of the product',
    example: 19.99,
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({
    description: 'The description of the product',
    example: 'A comfortable and stylish t-shirt for everyday wear.',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'The slug of the product',
    example: 't-shirt-teslo',
    required: false,
  })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({
    description: 'The stock of the product',
    example: 100,
    required: false,
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({
    description: 'The sizes available for the product',
    example: ['S', 'M', 'L', 'XL'],
  })
  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @ApiProperty({
    description: 'The gender for which the product is intended',
    example: 'unisex',
  })
  @IsString()
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @ApiProperty({
    description: 'The tags associated with the product',
    example: ['t-shirt', 'cotton', 'summer'],
    required: false,
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags: string[];

  @ApiProperty({
    description: 'The images of the product',
    example: [
      'https://example.com/images/product1.jpg',
      'https://example.com/images/product2.jpg',
    ],
    required: false,
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
