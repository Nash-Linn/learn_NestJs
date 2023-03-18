import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Generated,
} from 'typeorm';

@Entity()
export class Girl {
  @Generated('uuid') //生成 uuid
  uuid: string;

  @PrimaryGeneratedColumn('uuid') //自动生成id
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar', length: 255 })
  skill: string;

  @CreateDateColumn({ type: 'timestamp' })
  entryTime: Date;
}
