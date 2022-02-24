import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstansiComponent } from './instansi.component';

describe('InstansiComponent', () => {
  let component: InstansiComponent;
  let fixture: ComponentFixture<InstansiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstansiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstansiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
