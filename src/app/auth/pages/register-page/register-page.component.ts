import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder){

    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
      email: ['', [Validators.required, Validators.pattern(customValidators.emailPattern)]],
      username: ['', [Validators.required, customValidators.canBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['',[Validators.required]]
    });
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

  isValidField(field: string){
    //TODO: obtener validaciones desde un servicio
  }

}
