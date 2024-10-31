import { Component, Input } from '@angular/core';
import { ICard } from '../../models/ICard';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() cardData: ICard | null = null;
}
