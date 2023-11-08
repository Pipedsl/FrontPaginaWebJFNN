import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionListComponent } from './cotizacion-list.component';

describe('CotizacionListComponent', () => {
  let component: CotizacionListComponent;
  let fixture: ComponentFixture<CotizacionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizacionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
