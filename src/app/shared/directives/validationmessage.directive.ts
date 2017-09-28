import {Directive, Input, AfterViewInit, OnInit, ElementRef, TemplateRef, ViewContainerRef, OnDestroy, Renderer2} from '@angular/core'
import { Validators,FormsModule,ReactiveFormsModule,FormBuilder,NgForm,FormGroup,AbstractControl,FormControl,ControlContainer,FormGroupDirective } from '@angular/forms';

import { Observable,Subscription } from 'rxjs/Rx';

@Directive({
  selector: '[invalidmessage]'
})
export class InvalidmessageDirective implements OnInit, OnDestroy{
  @Input() invalidmessage: string;
  control: AbstractControl;
  hasView = false;
  controlValue$: Observable<any>;
  controlSubscription: Subscription;
  hasSubmitted: boolean;
  constructor(
    private _fg: ControlContainer,
    private _el: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit() {
    this.control = this.form.get(this.invalidmessage);
    let formSubmit$ = (<FormGroupDirective>this._fg).ngSubmit.map(()=>{
        this.hasSubmitted = true;
    });
    this.controlValue$ =  Observable.merge(this.control.valueChanges, Observable.of(''), formSubmit$ );
    this.controlSubscription = this.controlValue$.subscribe(() => {
      this.setVisible();
    });
  }

  private setVisible() {
    if (this.control.invalid && (this.control.dirty || this.hasSubmitted)) {
      this.render.removeStyle(this._el.nativeElement, 'display');
      this.render.addClass(this._el.nativeElement, 'error');
    }else {
      this.render.setStyle(this._el.nativeElement, 'display', 'none');
    }
  }

  match(error: string){
    if (this.control && this.control.errors){
      if (Object.keys(this.control.errors).indexOf(error) > -1){
        return true;
      }
    }
    return false;
  }

  get form(){ return this._fg.formDirective ? (this._fg.formDirective as FormGroupDirective).form : null; }

  ngOnDestroy(){
    this.controlSubscription.unsubscribe();
  }
}

@Directive({
  selector: '[invalidType]'
})
export class InvalidTypeDirective implements OnInit{  
  @Input('invalidType') type: string;
  private hasView = false;
  constructor(
    private invalidmessage: InvalidmessageDirective,
    private templateRef:TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  ngOnInit() {
   this.invalidmessage.controlValue$.subscribe(() => {
      this.setVisible();
    });
  }

  private setVisible() {
    if (this.invalidmessage.match(this.type)){
      if (!this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      }
    }else {
      if (this.hasView) {
         this.viewContainer.clear();
         this.hasView = false;
      }
    }
  }
}