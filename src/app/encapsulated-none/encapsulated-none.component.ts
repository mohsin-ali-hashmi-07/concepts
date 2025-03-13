import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulated-none',
  standalone: false,
  templateUrl: './encapsulated-none.component.html',
  styleUrl: './encapsulated-none.component.css',
  encapsulation: ViewEncapsulation.None
})
export class EncapsulatedNoneComponent {

}
