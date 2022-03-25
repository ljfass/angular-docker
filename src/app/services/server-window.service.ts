import { Injectable } from '@angular/core';
import { WindowServiceService } from './window-service.service';

@Injectable()
export class ServerWindowService extends WindowServiceService {
  getWidth(): number {
    return 0;
  }
}
