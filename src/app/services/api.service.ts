import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Country } from '../types/api';
import { Observable } from 'rxjs';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { map, tap } from 'rxjs/operators';
import { WindowServiceService } from './window-service.service';

const ALL_COUNTRIES_KEY = makeStateKey('all-countries');
const COUNTRY_DETAIL_KEY = makeStateKey('countrie-detail');

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endPoint = 'https://restcountries.com/v2';
  constructor(
    private window: WindowServiceService,
    @Inject(DOCUMENT) private _doc: Document,
    private state: TransferState,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  getAllCountries() {
    // return this.http.get<Country[]>(`${this.endPoint}/all`, {
    //   headers: { Authorization: '123456' },
    // });
    // return this.http.get<Country[]>(`${this.endPoint}/all`);
    if (this.state.hasKey(ALL_COUNTRIES_KEY)) {
      return new Observable<Country[]>((observer) => {
        const countries = this.state.get<Country[]>(ALL_COUNTRIES_KEY, []);
        observer.next(countries);
      });
    } else {
      return this.http.get<Country[]>(`${this.endPoint}/all`).pipe(
        tap((data) => {
          if (isPlatformServer(this.platformId)) {
            this.state.set(ALL_COUNTRIES_KEY, data as any);
          }
        })
      );
    }
  }
  getCountryByName(name: string) {
    // if (this.state.hasKey(COUNTRY_DETAIL_KEY)) {
    //   return new Observable<Country>((observer) => {
    //     const country = this.state.get<Country>(COUNTRY_DETAIL_KEY, {} as any);
    //     observer.next(country);
    //   });
    // } else {
    //   return this.http.get<Country[]>(`${this.endPoint}/name/${name}`).pipe(
    //     map(([res]) => res),
    //     tap((data) => {
    //       if (isPlatformServer(this.platformId)) {
    //         this.state.set(COUNTRY_DETAIL_KEY, data as any);
    //       }
    //     })
    //   );
    // }

    return this.http
      .get<Country[]>(`${this.endPoint}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  getCountriesByCodes(codes: string[]) {
    return this.http.get<Country[]>(
      `${this.endPoint}/alpha?codes=${codes.join(';')}`
    );
  }
}
