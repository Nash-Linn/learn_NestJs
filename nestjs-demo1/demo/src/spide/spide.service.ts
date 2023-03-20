import { Injectable } from '@nestjs/common';
import { CreateSpideDto } from './dto/create-spide.dto';
import { UpdateSpideDto } from './dto/update-spide.dto';

import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SpideService {
  async findAll() {
    const urls: string[] = [];
    const baseUrl = 'https://jpmn5.com/';
    const nextText = '下一页';
    let index = 0;
    const getCospaly = async () => {
      const body = await axios
        .get(
          `https://jpmn5.com/Cosplay/Cosplay10772${
            index ? '_' + index : ''
          }.html`,
        )
        .then((res) => res.data);
      const $ = cheerio.load(body);

      const page = $('.pageination').eq(0).find('a');

      const pageArray = page
        .map(function () {
          return $(this).text();
        })
        .toArray();

      if (pageArray.includes(nextText)) {
        $('.article-content p img').each(function () {
          urls.push(baseUrl + $(this).attr('src'));
        });

        index++;
        await getCospaly();
      }
    };

    await getCospaly();

    this.writeFile(urls);

    return `cos`;
  }

  writeFile(urls: string[]) {
    urls.forEach(async (url) => {
      const buffer = await axios
        .get(url, { responseType: 'arraybuffer' })
        .then((res) => {
          res.data;
        });

      const ws = fs.createWriteStream(
        path.join(__dirname, '../cos' + new Date().getTime() + '.jpg'),
      );
      ws.write(buffer);
    });
  }
}
