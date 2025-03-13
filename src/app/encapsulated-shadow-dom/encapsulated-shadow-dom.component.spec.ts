import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulatedShadowDomComponent } from './encapsulated-shadow-dom.component';

describe('EncapsulatedShadowDomComponent', () => {
  let component: EncapsulatedShadowDomComponent;
  let fixture: ComponentFixture<EncapsulatedShadowDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncapsulatedShadowDomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulatedShadowDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
