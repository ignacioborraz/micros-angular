import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    getSingleSpaExtraProviders(),
    importProvidersFrom(HttpClientModule),
    provideRouter(routes, withHashLocation()),
  ],
};
