import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';

import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
const fileDir = join(__dirname, '../images');
@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: fileDir,
        filename: (req, file, callback) => {
          const name = file.originalname.split('.')[0];
          const fileName = `${
            name + '(' + new Date().getTime() + ')' + extname(file.originalname)
          }`;
          return callback(null, fileName);
        },
      }),
    }),
  ],
  controllers: [UploadController],
  providers: [
    UploadService,
    {
      provide: 'fileDir',
      useValue: fileDir,
    },
  ],
  exports: [],
})
export class UploadModule {}
