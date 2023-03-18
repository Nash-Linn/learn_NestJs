import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entities';

@Injectable()
export class GirlService {
  // getGirls() {
  //   return {
  //     code: 0,
  //     data: ['小红', '翠花', '小李'],
  //     msg: '成功',
  //   };
  // }
  // addGirl() {
  //   return {
  //     code: 200,
  //     data: { id: 4, name: '小王', age: 22 },
  //     msg: '成功',
  //   };
  // }
  // getGirlById(id: number) {
  //   let reJson: any = {};
  //   switch (id) {
  //     case 1:
  //       reJson = {
  //         id: 1,
  //         name: '小红',
  //         age: 15,
  //       };
  //       break;
  //     case 2:
  //       reJson = {
  //         id: 2,
  //         name: '翠花',
  //         age: 16,
  //       };
  //       break;
  //     case 3:
  //       reJson = {
  //         id: 3,
  //         name: '小李',
  //         age: 22,
  //       };
  //       break;
  //   }
  //   return {
  //     code: 200,
  //     data: reJson,
  //     msg: '成功',
  //   };
  // }

  //使用数据库------------------------------------------

  constructor(
    @InjectRepository(Girl) private readonly girl: Repository<Girl>,
  ) {}

  addGirl() {
    const data = new Girl();
    data.name = '小张';
    data.age = 18;
    data.skill = '打篮球';
    return this.girl.save(data);
  }

  delGirl(id: number) {
    return this.girl.delete(id);
  }

  updateGirl(id: number) {
    const data = new Girl();
    data.name = '小红帽';
    data.age = 19;
    return this.girl.update(id, data);
  }

  getGirls() {
    return this.girl.find();
  }

  findGirlByName(name: string) {
    return this.girl.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
  }
}
