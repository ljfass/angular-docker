import { Injectable } from '@angular/core';

@Injectable()
export class WindowServiceService {
  getWidth(): number {
    return window.innerWidth;
  }
}
