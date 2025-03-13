import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulated-emulated',
  standalone: false,
  templateUrl: './encapsulated-emulated.component.html',
  styleUrl: './encapsulated-emulated.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class EncapsulatedEmulatedComponent {

}
