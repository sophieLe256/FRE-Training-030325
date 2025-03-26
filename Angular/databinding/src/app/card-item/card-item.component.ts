import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card-item',
  standalone: false,
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent {
  @Input('card') item!: Card;
  @Output() emitColor = new EventEmitter();

  changeTitleColor() {
    this.emitColor.emit(this.item.color);
  }
}