import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuComponent } from './components/menu/menu.component';
/*
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { OnlyDigit } from './shared/directives/onlydigit.directive';
*/

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, SharedModule ],
  declarations: [ AppComponent, FormularioComponent, 
                  HeaderComponent, 
                  BannerComponent, 
                  MenuComponent, 
                  /*
                  OnlyDigit,
                  SpinnerComponent,
                   ModalComponent */
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
