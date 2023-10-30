import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/save';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-contacto-agregar',
  templateUrl: './contacto-agregar.component.html',
  styleUrls: ['./contacto-agregar.component.scss']
})
export class ContactoAgregarComponent implements OnInit{
  loading$ !: Observable <boolean | null>;
  photoLoaded!: String;

  constructor(
    private store: Store<fromRoot.State>

  ) { }

  ngOnInit(): void {

  }

  registrarCotizacion(form: NgForm): void {
    if(form.valid){
      this.loading$ = this.store.pipe(select(fromList.getLoading));

      const contactoCreateRequest : fromList.ContactoCreateRequest = {
        nombre : form.value.nombre,
        email : form.value.email,
        telefono : form.value.telefono,
        rut : form.value.rut,
        mensaje : form.value.mensaje
      }
      this.store.dispatch(new fromList.Create(contactoCreateRequest));
    }
  }

  onFilesChanged(url: any) : void {
    if(url){
      this.photoLoaded = url;
    }
  }

}
