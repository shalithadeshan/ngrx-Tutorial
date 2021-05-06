import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {createEffects} from '@ngrx/effects/src/effects_module';
import {loginStart, loginSuccess} from './auth-action';
import {exhaustMap, map} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {setLoadingSpinner} from '../../store/shared/shared.action';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private store: Store<AppState>) {
  }

  login$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const user = this.authService.formatUser(data);
            return loginSuccess({ user, redirect: false});
          }),
        );
      })
    );
  });
}
