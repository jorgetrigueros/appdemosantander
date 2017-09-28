import { FormControl, AbstractControl } from '@angular/forms';

//Validar un codigo postal
export function codigoPostal(c: FormControl) {
  var codigo = c.value;
  let REGEXP = /^\d{5}$/i;

  if (!c.value) {
    return true
  }

  return REGEXP.test(codigo) ? null : {
    codigoPostal: {
      valid: false
    }
  };
}



