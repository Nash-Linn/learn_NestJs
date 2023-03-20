import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tags } from './tags.entity';
@Entity()
export class Users {
  @Generated('uuid')
  uuid: string;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  desc: string;

  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date;

  @OneToMany(() => Tags, (tags) => tags.user)
  tags: Tags[];
}
