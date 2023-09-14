import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() content: string = 'Button Content';
  @Input() color: string | undefined;
  @Output() onButtonClick = new EventEmitter();

  onClick() {
    this.onButtonClick.emit();
  }
}
