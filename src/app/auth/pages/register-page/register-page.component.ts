import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder){

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
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
