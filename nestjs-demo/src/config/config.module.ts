import { Module, Global, DynamicModule } from '@nestjs/common';

@Global()
@Module({
  // providers: [
  //   {
  //     provide: 'Config',
  //     useValue: { shopName: 'NashShop' },
  //   },
  // ],
  // exports: [
  //   {
  //     provide: 'Config',
  //     useValue: { shopName: 'NashShop' },
  //   },
  // ],
})
export class ConfigModule {
  static forRoot(option: string): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'Config',
          useValue: { shopName: 'NashShop' + option },
        },
      ],
      exports: [
        {
          provide: 'Config',
          useValue: { shopName: 'NashShop' + option },
        },
      ],
    };
  }
}
