import { Injectable } from '@angular/core';
import * as fromActions from './save.actions';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { NotificationService } from '@app/services';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ContactoCreateRequest, ContactoResponse } from './save.models';
import { environment } from 'environments/environment';

type Action = fromActions.All;

@Injectable()
export class SaveEffects {

  constructor(
    private actions: Actions,
    private httpClient: HttpClient,
    private router: Router,
    private notification: NotificationService
  ){}

  read: Observable<Action> = createEffect( () =>
  this.actions.pipe(
    ofType(fromActions.Types.READ),
    switchMap( () =>
    this.httpClient.get<ContactoResponse[]>(`${environment.url}gateway/contacto`)
    .pipe(
      delay(1000),
      map((contactos: ContactoResponse[])=> new fromActions.ReadSuccess(contactos) ),
      catchError(err => of(new fromActions.ReadError(err.message)))
    )
    )
  )
  );


  create: Observable<Action> = createEffect( () =>
    this.actions.pipe(
      ofType(fromActions.Types.CREATE),
      map((action: fromActions.Create) => action.contacto),
      switchMap( (request: ContactoCreateRequest) =>
      this.httpClient.post<ContactoResponse>(`${environment}gateway/contacto`, request)
      .pipe(
        delay(1000),
        tap((response: ContactoResponse) =>{
          this.router.navigate(['contacto/list']);
        }),
        map((contacto: ContactoResponse) => new fromActions.CreateSuccess(contacto)),
        catchError(err => {
          this.notification.error(`Errores guardando el contacto: ${err.message}`);
          return of(new fromActions.CreateError(err.message));
        })
      )
      )
    )
  );

}
