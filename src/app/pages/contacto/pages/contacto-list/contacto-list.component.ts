import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/save';
import { Observable } from 'rxjs';
import {ContactoResponse} from '../../store/save';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.scss']
})
export class ContactoListComponent implements OnInit{
  contactos$ ! : Observable<ContactoResponse[] | null>
  loading$ ! : Observable<boolean | null>

  fotoDefault : string = "#"
  constructor(
    private store: Store<fromRoot.State>
  ){}

  ngOnInit(): void {
    this.store.dispatch(new fromList.Read());
    this.loading$ = this.store.pipe(select(fromList.getLoading));
    this.contactos$ = this.store.pipe(select(fromList.getContactos));
  }

}
