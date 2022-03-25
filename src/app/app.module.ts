import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { ServerWindowService } from './services/server-window.service';
import { WindowServiceService } from './services/window-service.service';
import { BrowserStateInterceptor } from './services/interceptor/browser-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CountryCardComponent,
    DropdownComponent,
    NavBarComponent,
    DetailComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: WindowServiceService,
      useClass: ServerWindowService,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: BrowserStateInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
