import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseInterceptors,
	UploadedFile,
	Res,
	Inject,
	StreamableFile,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import {
	FilesInterceptor,
	FileInterceptor,
} from '@nestjs/platform-express/multer';
import { Response } from 'express';
import { join } from 'path';
import { zip } from 'compressing';
import { createReadStream } from 'fs';
@Controller('upload')
export class UploadController {
	constructor(
		private readonly uploadService : UploadService,
		@Inject('fileDir') private readonly fileDir : string,
	) { }

	@Post('uploadfile')
	@UseInterceptors(FileInterceptor('file')) //用于处理文件
	upload(@UploadedFile() file) {
		return {
			code: 200,
			msg: '成功',
		};
	}

	@Get('export')
	downLoad(@Res() res : Response) {
		const url = join(this.fileDir, '/图片2(1679216886592).png');
		res.download(url);
		return {
			code: 200,
			msg: '成功',
			url,
		};
	}

	//进行压缩
	@Get('zipstream')
	async downStreamzip(@Res() res : Response) {
		const filename = '图片2(1679216886592).png';
		const url = join(this.fileDir, `/${filename}`);
		const tarStram = new zip.Stream();
		await tarStram.addEntry(url);

		res.setHeader('Content-Type', 'application/octet-stream');
		res.setHeader(
			'Content-Disposition',
			`attachment;filename = ${encodeURIComponent(filename)}`,
		);
		tarStram.pipe(res);
	}

	//不压缩
	@Get('stream')
	// file.pipe(res);
	downStream(@Res({ passthrough: true }) res : Response) : StreamableFile {
		const filename = '图片2(1679216886592).png';
		const url = join(this.fileDir, `/${filename}`);
		const file = createReadStream(url);
		res.setHeader('Content-Type', 'application/json');
		res.setHeader(
			'Content-Disposition',
			`attachment;filename = ${encodeURIComponent(filename)}`,
		);
		const steamFile = new StreamableFile(file);
		return steamFile;
	}
}
