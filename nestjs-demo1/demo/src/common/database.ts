import { TypeOrmModule } from '@nestjs/typeorm';
export function databaseConf() {
  const conf = [
    TypeOrmModule.forRoot({
      name: 'test_nest',
      type: 'mysql',
      host: '101.34.111.220',
      port: 3306,
      username: 'nest_root',
      password: 'root123',
      database: 'test_nest',
      retryDelay: 500, //重试时间间隔
      retryAttempts: 10, //重试次数
      synchronize: true, //自动将实体类同步到数据库
      autoLoadEntities: true, //自动加载实体
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    TypeOrmModule.forRoot({
      name: 'demo',
      type: 'mysql',
      host: '101.34.111.220',
      port: 3306,
      username: 'demo',
      password: 'Gd2EpknAmrm7JLP3',
      database: 'demo',
      retryDelay: 500, //重试时间间隔
      retryAttempts: 10, //重试次数
      synchronize: true, //自动将实体类同步到数据库
      autoLoadEntities: true, //自动加载实体
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
  ];

  return conf;
}
