import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  loading$ ! : Observable<boolean | null>;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() : void {
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
  }

  registrarUsuario(form: NgForm) : void {

    if(form.valid){
      const userCreateRequest : fromUser.UserCreateRequest = {
        first_name: form.value.nombre,
        last_name: form.value.apellido,
        phone: form.value.telefono,
        username: form.value.username,
        email : form.value.email,
        password: form.value.password
      }

      this.store.dispatch(new fromUser.SignUpEmail(userCreateRequest))
    }
  }


}
