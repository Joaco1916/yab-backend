import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Todas putas menos conmigo. Atte: Tommy';
  }
}
