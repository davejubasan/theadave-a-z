import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, TitleComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
