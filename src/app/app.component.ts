import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  HostListener,
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
import { VerificationComponent } from './components/verification/verification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardComponent,
    TitleComponent,
    LettersComponent,
    VerificationComponent,
    NgStyle,
  ],
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  @ViewChild('swiper') swiperRef!: ElementRef<SwiperContainer>;
  @ViewChild('backgroundAudio') backgroundAudio!: ElementRef<HTMLAudioElement>;
  @ViewChild('cards') cards!: ElementRef;

  cardData: ICard[] = data;
  letters: LettersType[] = data.map((card, index) => ({
    letter: card.letter,
    index,
  }));
  activeIndex: number = 0;
  backgroundImage: string = 'card-a.png'; // change to default

  ngAfterViewInit(): void {
    this.cards.nativeElement.addEventListener('visibilitychange', () => {
      if (this.cards.nativeElement.visibilityState === 'visible')
        this.playBackgroundMusic();
    });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState != 'visible') this.pauseBackgroundMusic();
    });
  }

  playBackgroundMusic(): void {
    const audio = this.backgroundAudio.nativeElement;
    audio.muted = false;
    audio
      .play()
      .then(() => console.log('Audio resumed as tab became active'))
      .catch((error) => console.error('Error resuming audio:', error));
  }

  pauseBackgroundMusic(): void {
    const audio = this.backgroundAudio.nativeElement;
    audio.muted = true;
    audio.pause();
  }

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

  @HostListener('document:keydown', ['$event'])
  slideViewKeyboard(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight')
      this.swiperRef?.nativeElement.swiper.slideNext();
    else if (event.key === 'ArrowLeft')
      this.swiperRef?.nativeElement.swiper.slidePrev();
  }

  private getActiveIndex(): number {
    return this.swiperRef?.nativeElement.swiper.activeIndex;
  }
}
