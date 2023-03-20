import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Testsql {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ select: true, comment: '注释', default: '123', nullable: true }) //select: true 查询时 过滤该字段
  password: string;

  @Column()
  age: number;

  @Generated('uuid')
  uuid: string;

  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date;

  @Column({
    type: 'enum',
    enum: {
      女: 0,
      男: 1,
    },
    default: 1,
  })
  gender: number;

  @Column('simple-array')
  names: string[];

  @Column('simple-json')
  json: { name: string; age: number };

  @Column({ type: 'varchar', length: 255 })
  desc1: string;
}
