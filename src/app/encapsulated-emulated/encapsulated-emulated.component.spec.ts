import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulatedEmulatedComponent } from './encapsulated-emulated.component';

describe('EncapsulatedEmulatedComponent', () => {
  let component: EncapsulatedEmulatedComponent;
  let fixture: ComponentFixture<EncapsulatedEmulatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncapsulatedEmulatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulatedEmulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
