import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillMachineComponent } from './fill-machine.component';

describe('FillMachineComponent', () => {
  let component: FillMachineComponent;
  let fixture: ComponentFixture<FillMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
