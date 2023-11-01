import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/save';
import { Observable } from 'rxjs';
import { CotizacionResponse } from '../../store/save'
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-cotizacion-list',
  templateUrl: './cotizacion-list.component.html',
  styleUrls: ['./cotizacion-list.component.scss']
})
export class CotizacionListComponent implements OnInit {
  cotizaciones$ ! : Observable<CotizacionResponse []| null>
  loading$ ! : Observable<boolean | null>

  fotoDefault : string = "#"

  constructor(
    private store: Store<fromRoot.State>
  ){}

  ngOnInit(): void {
    this.store.dispatch(new fromList.Read());
    this.loading$ = this.store.pipe(select(fromList.getLoading));
    this.cotizaciones$ = this.store.pipe(select(fromList.getCotizaciones));
  }

}
