import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ROOT_EFFECTS, ROOT_REDUCERS } from '@store/app.state';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors} from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore(ROOT_REDUCERS, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    provideEffects(ROOT_EFFECTS),
    provideStoreDevtools({ name: 'test' }),
    provideAnimations(),
  ],
};
