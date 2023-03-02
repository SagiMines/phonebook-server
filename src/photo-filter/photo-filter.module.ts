import { Module } from '@nestjs/common';
import { PhotoFilterService } from './photo-filter.service';
import { PhotoFilterResolver } from './photo-filter.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoFilter } from './entities/photo-filter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoFilter])],
  providers: [PhotoFilterResolver, PhotoFilterService],
})
export class PhotoFilterModule {}
