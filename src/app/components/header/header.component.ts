import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { UserResponse } from '@app/store/user';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();
  @Input() user ! : UserResponse | null;
  @Input() isAuthorized! : boolean | null;
  @Output() signOut = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

  }

  onMenuToggleDispatch(): void {
    this.menuToggle.emit();

  }

  onSignOut() : void {
    this.signOut.emit()
  }

  images = [
    { url: 'assets/images/banner/imagen1.jpg', alt: 'Descripción de la imagen 1' },
    // Agrega más imágenes según sea necesario
  ];

}
