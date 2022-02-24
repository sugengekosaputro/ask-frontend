import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayananFormComponent } from './layanan-form.component';

describe('LayananFormComponent', () => {
  let component: LayananFormComponent;
  let fixture: ComponentFixture<LayananFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayananFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayananFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
