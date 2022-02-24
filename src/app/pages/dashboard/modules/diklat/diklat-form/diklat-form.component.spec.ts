import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiklatFormComponent } from './diklat-form.component';

describe('DiklatFormComponent', () => {
  let component: DiklatFormComponent;
  let fixture: ComponentFixture<DiklatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiklatFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiklatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
