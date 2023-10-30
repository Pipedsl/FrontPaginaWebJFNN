import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/save';

@Component({
  selector: 'app-cotizacion-agregar',
  templateUrl: './cotizacion-agregar.component.html',
  styleUrls: ['./cotizacion-agregar.component.scss']
})
export class CotizacionAgregarComponent implements OnInit{
  loading$ !: Observable<boolean | null>;
  photoLoaded!: String;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
  }

  registrarCotizacion(form: NgForm): void{
    if(form.valid){
      this.loading$ = this.store.pipe(select(fromList.getLoading));

      const cotizacionCreateRequest : fromList.CotizacionCreateRequest = {
        nombre : form.value.nombre,
        email : form.value.email,
        telefono : form.value.telefono,
        rut : form.value.rut,
        marca : form.value.marca,
        modelo : form.value.modelo,
        año : form.value.año,
        chasis : form.value.chasis,
        direccion: form.value.direccion,
        mensaje : form.value.mensaje,
        foto : this.photoLoaded
      }
      this.store.dispatch(new fromList.Create(cotizacionCreateRequest));
    }
  }

  onFileChanged(url: any): void {
    if(url){
      this.photoLoaded =url;
    }
  }

}
