import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZombieModule } from './zombie/zombie.module';

@Module({
  imports: [ZombieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
