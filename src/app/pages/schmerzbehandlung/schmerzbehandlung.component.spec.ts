import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmerzbehandlungComponent } from './schmerzbehandlung.component';

describe('SchmerzbehandlungComponent', () => {
  let component: SchmerzbehandlungComponent;
  let fixture: ComponentFixture<SchmerzbehandlungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchmerzbehandlungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchmerzbehandlungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
