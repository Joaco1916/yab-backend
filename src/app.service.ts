import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Todes yabers menos conmigo. Atte: Didy';
  }
}
