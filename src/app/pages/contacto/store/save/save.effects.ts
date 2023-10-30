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
    private action: Actions,
    private httpClient: HttpClient,
    private router: Router,
    private notification: NotificationService
  ){}


  create: Observable<Action> = createEffect( () =>
    this.action.pipe(
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
