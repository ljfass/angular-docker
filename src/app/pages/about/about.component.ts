import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.api.getAllCountries().subscribe((countries) => {
    //   console.log('about page request');
    //   // console.log(countries);
    // });
  }
}
