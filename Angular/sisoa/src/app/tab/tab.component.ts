import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: false,
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
})
export class TabComponent {
  @Input() title: string = '';
  @Input() active: boolean = false;
  @Output() emitActiveTitle = new EventEmitter();
  @ViewChild('btnRef') btnRef!: ElementRef;

  toggle() {
    this.emitActiveTitle.emit(this.title);
  }
}
