import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() name: any;
  @Input() cardNumber: any;
  @Input() expirationDate: any;
  @Input() securityCode: any;
}
