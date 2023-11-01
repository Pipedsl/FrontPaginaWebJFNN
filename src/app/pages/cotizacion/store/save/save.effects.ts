import { Injectable } from '@angular/core';
import * as fromActions from './save.actions';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { NotificationService } from '@app/services';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CotizacionCreateRequest, CotizacionResponse } from './save.models';
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
    this.httpClient.get<CotizacionResponse[]>(`${environment.url}gateway/cotizacion`)
    .pipe(
      delay(1000),
      map((cotizaciones: CotizacionResponse[])=> new fromActions.ReadSuccess(cotizaciones) ),
      catchError(err => of(new fromActions.ReadError(err.message)))
    )
    )
  )
  );


  create: Observable<Action> = createEffect( () =>
    this.actions.pipe(
      ofType(fromActions.Types.CREATE),
      map((action: fromActions.Create) => action.cotizacion),
      switchMap( (request: CotizacionCreateRequest) =>
      this.httpClient.post<CotizacionResponse>(`${environment.url}gateway/cotizacion`, request)
      .pipe(
        delay(1000),
        tap((response: CotizacionResponse) =>{
          this.router.navigate(['cotizacion/list']);
        }),
        map((cotizacion: CotizacionResponse) => new fromActions.CreateSuccess(cotizacion)),
        catchError(err => {
          this.notification.error(`Errores guardando la cotización: ${err.message}`);
          return of(new fromActions.CreateError(err.message));
        })
      )
    )
  )
  );

}
