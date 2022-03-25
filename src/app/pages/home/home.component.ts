import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from 'express';
import { ApiService } from 'src/app/services/api.service';
import { Country } from '../../types/api.d';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  source!: Country[];
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.api.getAllCountries().subscribe((countries) => {
      this.source = countries;
    });
    if (!isPlatformServer(this.platformId)) {
    }
  }

  getDataAgain() {
    this.api.getAllCountries().subscribe((countries) => {
      this.source = countries;
    });
  }

  gotToAbout() {
    this.router.navigate(['about']);
  }
}
