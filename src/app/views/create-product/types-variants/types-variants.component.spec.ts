import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesVariantsComponent } from './types-variants.component';

describe('TypesVariantsComponent', () => {
  let component: TypesVariantsComponent;
  let fixture: ComponentFixture<TypesVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesVariantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
