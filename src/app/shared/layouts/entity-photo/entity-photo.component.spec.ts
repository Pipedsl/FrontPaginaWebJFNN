import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityPhotoComponent } from './entity-photo.component';

describe('EntityPhotoComponent', () => {
  let component: EntityPhotoComponent;
  let fixture: ComponentFixture<EntityPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityPhotoComponent]
    });
    fixture = TestBed.createComponent(EntityPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
