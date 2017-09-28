import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    animations: [
        trigger('dialog', [
        transition('void => *', [
            style({ transform: 'scale3d(.3, .3, .3)' }),
            animate(100)
        ]),
        transition('* => void', [
            animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
        ])
        ])
    ]
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() closable;
  @Input() visible: boolean;
  @Input() spinner: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  close() {
    if (this.closable){
      this.visible = false;
      this.visibleChange.emit(this.visible);
    }
  }
}
