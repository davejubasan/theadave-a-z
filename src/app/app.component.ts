import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';
import data from '../assets/data.json';
import { ICard } from './models/ICard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, TitleComponent],
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  cardData: ICard[] = data;
}
