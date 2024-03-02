import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosmetikComponent } from './kosmetik.component';

describe('KosmetikComponent', () => {
  let component: KosmetikComponent;
  let fixture: ComponentFixture<KosmetikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KosmetikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KosmetikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
