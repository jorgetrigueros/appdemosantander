import { Component, OnInit, AfterViewInit, Output, EventEmitter, ViewChild, ViewChildren, ElementRef, Renderer2, QueryList } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as GlobalValidators from '../../shared/validators/globalvalidators';
import { Formulario } from './../../shared/model/app.formulario.class';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  providers: []
})
export class FormularioComponent implements OnInit, AfterViewInit {
  @ViewChild('Nombre') nombre: ElementRef;
  @ViewChild('Email') email: ElementRef;
  @ViewChild('CodigoPostal') codigoPostal: ElementRef;
  @ViewChildren("input") inputs: QueryList<any>;

  //private lstViewChild: Array<ElementRef>=[];  

  private form: FormGroup;
  private showModal: boolean = false;
  //private errorMessage: HTMLElement;


  constructor(private fb: FormBuilder, private renderer: Renderer2) {
    this.form = this.fb.group({
      'Nombre': [null, Validators.required],
      'Direccion': [null],
      'Email': ['', Validators.compose([Validators.required, Validators.email])],
      'CodigoPostal': [null, GlobalValidators.codigoPostal],
      'TextosLegales': false
    });

    //this.errorMessage = document.createElement('div');
    //this.errorMessage.textContent = 'Dato requerido';
    //this.errorMessage.className = 'error';
    
  }

  ngOnInit() {
    this.form.statusChanges.subscribe(
      response => {
        //this.processFields();
      }
    );
  }

  ngAfterViewInit() {
  }

  processFields() {
    let errorMessage=this.createErrorMessage('Dato requerido');
    Object.keys(this.form.controls).forEach(key => {
      //console.log(this.form.get(key).value);      
      switch (key) {
        case "Nombre":
          if (!this.form.controls['Nombre'].valid && this.form.controls['Nombre'].touched) {            
            //this.errorMessage.textContent='Dato requerido';
            this.showError(this.nombre, errorMessage);
          } else {
            this.clearError(this.nombre);
          }
          return;
          //break;
        case "Email":
          if (!this.form.controls['Email'].valid && this.form.controls['Email'].touched) {
            //this.errorMessage.textContent='Dato requerido';
            this.showError(this.email, errorMessage);
          } else {
            this.clearError(this.email);
          }
          return;
          //break;
        case "CodigoPostal":
          if (!this.form.controls['CodigoPostal'].valid && this.form.controls['CodigoPostal'].touched) {
            //this.errorMessage.textContent='Codigo postal incorrecto!!';
            errorMessage.textContent='Codigo postal incorrecto!!';
            this.showError(this.codigoPostal, errorMessage);
          } else {
            this.clearError(this.codigoPostal);
          }
          return;
          //break;          
      }      
    });
  }

  createErrorMessage(message?:string): HTMLElement {
    let errorMessage: HTMLElement;
    errorMessage = document.createElement('div');
    if (message) {
      errorMessage.textContent=message;
    }
    errorMessage.className = 'error';
    return errorMessage;
  }


/*
    processFields() {
      Object.keys(this.form.controls).forEach(key => {
        //console.log(this.form.get(key).value);
        let ctrl= this.form.controls[key];
        console.log(ctrl);
        if (!ctrl.valid && ctrl.touched) {

        }
      });
    } 
*/     

  showError(elementref: ElementRef, htmlElement) {
    this.renderer.addClass(elementref.nativeElement, 'has-error');
    let elem = <HTMLElement>elementref.nativeElement;
    this.clearError(elementref);
    console.log(elem);
    elem.insertAdjacentElement("afterend", htmlElement);
  }

  clearError(elementref: ElementRef) {
    this.renderer.removeClass(elementref.nativeElement, 'has-error');
    let elem = <HTMLElement>elementref.nativeElement;
    console.log(elem.nextElementSibling);
    //console.log(elem.nextSibling);
    if (elem.nextElementSibling && elem.nextElementSibling.className === 'error') {
      elem.nextElementSibling.remove();
    }
  }

  registrarDatos(event) {
    let formulario: Formulario = new Formulario();
    formulario.Nombre = this.form.controls['Nombre'].value;
    formulario.Email = this.form.controls['Email'].value;
    formulario.CodigoPostal = this.form.controls['CodigoPostal'].value;
    formulario.Direccion = this.form.controls['Direccion'].value;
        //let textolegal = this.form.controls['TextosLegales'].value;

    //TODO: Post formulario ??

    this.showModal = true;
    setTimeout(() => this.showModal = false, 3000);
  }

  alert(texto) {
    alert(texto);
  }


}