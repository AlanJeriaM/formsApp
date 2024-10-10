import { canBeStrider } from './../../../shared/validators/validators';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import EmailValidator from '../../../shared/validators/email-validator.service';
//import * as customValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorsService

  ){

    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [ new EmailValidator() ] ],
      username: ['', [Validators.required, this.validatorService.canBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['',[Validators.required]]
    });
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

  isValidField(field: string){
    //TODO: obtener validaciones desde un servicio
    return this.validatorService.isValidField( this.myForm, field );

  }

}
