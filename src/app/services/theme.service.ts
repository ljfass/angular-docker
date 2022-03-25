import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Theme {
  light = 'light',
  dark = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(
    Theme.light
  );
  constructor() {}

  get theme(): Observable<Theme> {
    return this.theme$.asObservable();
  }

  toggleTheme() {
    if (this.theme$.value === Theme.light) {
      this.theme$.next(Theme.dark);
    } else {
      this.theme$.next(Theme.light);
    }
  }
}
