import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PhotoFilterService } from './photo-filter.service';
import { PhotoFilter } from './entities/photo-filter.entity';
import { PhotoFilterDto } from './dto/photo-filter-dto';

@Resolver(() => PhotoFilter)
export class PhotoFilterResolver {
  constructor(private readonly photoFilterService: PhotoFilterService) {}

  @Query(() => PhotoFilter, { name: 'getByContactId' })
  getByContactId(@Args('contactId') contactId: number) {
    return this.photoFilterService.findByContactId(contactId);
  }

  @Mutation(() => PhotoFilter, { name: 'createPhotoFilter' })
  createPhotoFilter(@Args('photoFilter') photoFilter: PhotoFilterDto) {
    return this.photoFilterService.createPhotoFilter(photoFilter);
  }

  @Mutation(() => PhotoFilter, { name: 'updatePhotoFilter' })
  updatePhotoFilter(
    @Args('photoFilter') photoFilter: PhotoFilterDto,
    @Args('contactId') contactId: number,
  ) {
    return this.photoFilterService.updatePhotoFilter(photoFilter, contactId);
  }
}
