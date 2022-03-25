import { Component, OnInit } from '@angular/core';
import { Theme, ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-countries-universal';
  theme!: Theme;

  constructor(private themeServe: ThemeService) {}
  ngOnInit(): void {
    this.themeServe.theme.subscribe((data) => {
      this.theme = data;
    });
  }
}
