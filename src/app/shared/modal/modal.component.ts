import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  template: '<app-modal><ng-content></ng-content></app-modal>',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {}
