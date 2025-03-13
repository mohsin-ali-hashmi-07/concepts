import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulated-shadow-dom',
  standalone: false,
  templateUrl: './encapsulated-shadow-dom.component.html',
  styleUrl: './encapsulated-shadow-dom.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EncapsulatedShadowDomComponent {

}
