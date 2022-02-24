import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstansiFormComponent } from './instansi-form.component';

describe('InstansiFormComponent', () => {
  let component: InstansiFormComponent;
  let fixture: ComponentFixture<InstansiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstansiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstansiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
