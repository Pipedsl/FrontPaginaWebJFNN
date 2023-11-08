import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionAgregarComponent } from './cotizacion-agregar.component';

describe('CotizacionAgregarComponent', () => {
  let component: CotizacionAgregarComponent;
  let fixture: ComponentFixture<CotizacionAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizacionAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizacionAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
