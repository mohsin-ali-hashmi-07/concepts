import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulatedNoneComponent } from './encapsulated-none.component';

describe('EncapsulatedNoneComponent', () => {
  let component: EncapsulatedNoneComponent;
  let fixture: ComponentFixture<EncapsulatedNoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncapsulatedNoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulatedNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
