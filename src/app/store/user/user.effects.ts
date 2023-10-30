import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NotificationService } from '@app/services';
import * as fromActions from './user.actions';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UserResponse } from './user.models';
import { environment } from '@src/environments/environment';

type Action = fromActions.All;

@Injectable()
export class UserEffects {
  constructor(
    private httpClient: HttpClient,
    private actions: Actions,
    private notification: NotificationService,
    private router: Router
  ) {}

  signUpEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGN_UP_EMAIL),
      map((action: fromActions.SignUpEmail) => action.user),
      switchMap((userData) =>
        this.httpClient.post<UserResponse>(`${environment.url}api/athentication/sign-up`, userData)
          .pipe(
            tap((response: UserResponse) => {
              localStorage.setItem('token', response.token);
              this.router.navigate(['/']);
            }),
            map(
              (response: UserResponse) =>
                new fromActions.SignUpEmailSuccess(
                  response.email,
                  response || null
                )
            ),
            catchError((err) => {
              this.notification.error('Errores al registrar un nuevo usuario');
              return of(new fromActions.SignUpEmailError(err.message));
            })
          )
      )
    )
  );

  signInEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGNIN_IN_EMAIL),
      map((action: fromActions.SignInEmail) => action.credentials),
      switchMap((userData) =>
        this.httpClient.post<UserResponse>(`${environment.url}api/authentication/sign-in`, userData)
          .pipe(
            tap((response: UserResponse) => {
              localStorage.setItem('token', response.token);
              this.router.navigate(['/']);
            }),
            map(
              (response: UserResponse) =>
                new fromActions.SignInEmailSuccess(
                  response.email,
                  response || null
                )
            ),
            catchError((err) => {
              this.notification.error('Las credenciales son incorrectas');
              return of(new fromActions.SignInEmailError(err.message));
            })
          )
      )
    )
  );

  init: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.INIT),
      switchMap(async () => localStorage.getItem('token')),
      switchMap((token) => {
        if(token){

          return this.httpClient.get<UserResponse>(`${environment.url}api/user`,)
          .pipe(
            tap((response: UserResponse) => {
              console.log('data del usuario en sesion que ciente del servidore' , response);
            }),
            map(
              (response: UserResponse) => new fromActions.InitAuthorized(response.email, response || null )),
            catchError((err) => {
              return of(new fromActions.InitError(err.message));
            })
          )
        }else{
          return of(new fromActions.InitUnauthorized());
        }

      })
    )
  );
}
