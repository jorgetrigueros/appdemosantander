import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  providers: []
})
export class ButtonComponent implements OnInit {
  @Input() text;
  @Input() disabled: boolean= false;
  @Input() cssClassName;
  @Output() clickButton : EventEmitter<any> = new EventEmitter<any>();
  @Output() focus : EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    
  }

  click(){
    this.clickButton.emit();
  }


}