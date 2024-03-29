import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusbildungComponent } from './ausbildung.component';

describe('AusbildungComponent', () => {
  let component: AusbildungComponent;
  let fixture: ComponentFixture<AusbildungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AusbildungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AusbildungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
