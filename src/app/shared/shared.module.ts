import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';
import { OnlyDigit } from './directives/onlydigit.directive';
import { InvalidTypeDirective,InvalidmessageDirective } from './directives/validationmessage.directive';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ OnlyDigit, SpinnerComponent, ModalComponent, ButtonComponent, InvalidTypeDirective, InvalidmessageDirective ],
  exports: [
    SpinnerComponent, ModalComponent, OnlyDigit, ButtonComponent, InvalidTypeDirective, InvalidmessageDirective
  ]
})
//export class SharedModule { }
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
            ]
        };
    }
}