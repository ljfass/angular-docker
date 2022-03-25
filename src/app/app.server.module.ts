import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { WindowServiceService } from './services/window-service.service';
import { ServerWindowService } from './services/server-window.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerStateInterceptor } from './services/interceptor/server-interceptor';
@NgModule({
  imports: [AppModule, ServerModule, ServerTransferStateModule],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: WindowServiceService,
      useClass: ServerWindowService,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ServerStateInterceptor,
    //   multi: true,
    // },
  ],
})
export class AppServerModule {}
