import { Tags } from './entities/tags.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  // constructor(
  @InjectRepository(Users, 'test_nest')
  private readonly users: Repository<Users>;
  @InjectRepository(Tags, 'test_nest') private readonly tags: Repository<Tags>;
  // ) {}
  create(createUserDto: CreateUserDto) {
    const data = new Users();
    data.name = createUserDto.name;
    data.desc = createUserDto.desc;

    return this.users.save(data);
  }

  async findAll(query: { keyWord: string; page: number; pageSize: number }) {
    const page = query.page ? query.page : 1;
    const pageSize = query.pageSize ? query.pageSize : 10;
    const keyWord = query.keyWord ? query.keyWord : '';
    const data = await this.users.find({
      relations: ['tags'],
      where: {
        name: Like(`%${keyWord}%`),
      },
      order: {
        id: 'DESC',
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    const total = await this.users.count({
      where: {
        name: Like(`%${keyWord}%`),
      },
    });
    return {
      data,
      total,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.users.delete(id);
  }

  async addTags(params: { tags: string[]; userId: number }) {
    const userInfo = await this.users.findOne({ where: { id: params.userId } });
    const taglist: Tags[] = [];
    for (const i in params.tags) {
      const T = new Tags();
      T.name = params.tags[i];
      taglist.push(T);
    }
    userInfo.tags = taglist;
    this.users.save(userInfo);
    return true;
  }
}
