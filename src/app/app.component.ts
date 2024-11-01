import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';
import data from '../assets/data.json';
import { ICard } from './models/ICard';
import { SwiperContainer } from 'swiper/element';
import { LettersComponent } from './components/letters/letters.component';
import { LettersType } from './models/LettersType';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, TitleComponent, LettersComponent, NgStyle],
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  @ViewChild('swiper') swiperRef!: ElementRef<SwiperContainer>;
  cardData: ICard[] = data;
  letters: LettersType[] = data.map((card, index) => ({
    letter: card.letter,
    index,
  }));
  activeIndex: number = 0;
  backgroundImage: string = 'card-a.png'; // change to default

  slideTo(letter: LettersType): void {
    if (letter.index !== this.getActiveIndex())
      this.swiperRef?.nativeElement.swiper.slideTo(letter.index);
  }

  updateActiveIndex() {
    this.activeIndex = this.getActiveIndex();
  }

  updateBgImage() {
    this.backgroundImage = this.cardData[this.getActiveIndex()].image;
  }

  onSlideChange() {
    this.updateActiveIndex();
    this.updateBgImage();
  }

  private getActiveIndex(): number {
    return this.swiperRef?.nativeElement.swiper.activeIndex;
  }
}
