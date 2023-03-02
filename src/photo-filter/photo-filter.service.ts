import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoFilterDto } from './dto/photo-filter-dto';
import { PhotoFilter } from './entities/photo-filter.entity';
@Injectable()
export class PhotoFilterService {
  constructor(
    @InjectRepository(PhotoFilter)
    private photoFilterRepo: Repository<PhotoFilter>,
  ) {}
  async findByContactId(contactId: number): Promise<PhotoFilter> {
    return this.photoFilterRepo.findOne({ where: { contactId } });
  }

  async createPhotoFilter(photoFilter: PhotoFilterDto): Promise<PhotoFilter> {
    return this.photoFilterRepo.save(photoFilter);
  }

  async updatePhotoFilter(
    photoFilter: PhotoFilterDto,
    contactId: number,
  ): Promise<PhotoFilter> {
    let isPhotoFilterExists;
    isPhotoFilterExists = await this.findByContactId(contactId);
    if (isPhotoFilterExists) {
      await this.photoFilterRepo.update({ contactId }, { ...photoFilter });
    } else {
      isPhotoFilterExists = await this.createPhotoFilter(photoFilter);
    }
    return isPhotoFilterExists;
  }
}
