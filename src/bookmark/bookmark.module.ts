import { Module } from '@nestjs/common';
import { BookmarkController } from './bookmark.controller';

@Module({
  controllers: [BookmarkController]
})
export class BookmarkModule {}
