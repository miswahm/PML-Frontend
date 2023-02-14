import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCreateProductComponent } from './layout-create-product.component';

describe('LayoutCreateProductComponent', () => {
  let component: LayoutCreateProductComponent;
  let fixture: ComponentFixture<LayoutCreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCreateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
