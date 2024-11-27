import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LettersType } from '../../models/LettersType';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-letters',
  standalone: true,
  imports: [NgClass],
  templateUrl: './letters.component.html',
})
export class LettersComponent {
  @Input({ required: true }) data: LettersType | null = null;
  @Input() activeIndex: number = 0;
  @Output() slideToLetterEvent = new EventEmitter<LettersType | null>();
  @Output() activeIndexEvent = new EventEmitter<number>();

  slideToLetter() {
    this.slideToLetterEvent.emit(this.data);
    this.activeIndexEvent.emit(this.data?.index);
  }
}
