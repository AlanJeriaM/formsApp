import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { startWith } from 'rxjs';


const rtx5090 = {
    name: 'RTX', price: 0, inStorage: 6 }

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit{



  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStoage: new FormControl(0),
  // });

  public myForm: FormGroup;

  ngOnInit(): void {
   //this.myForm.reset(rtx5090)
  }

  isValidField(field : string): boolean | null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError( field: string ): string | null{

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)){

      switch(key){
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${ errors ['minlength'].requiredLength } caracteres.`
      }

    }

    return null;



  }

  constructor(private fb: FormBuilder) {

    // Inicialización dentro del constructor
    this.myForm = this.fb.group({
      name: ['',[ Validators.required, Validators.minLength(3)   ]],
      price: [0, [ Validators.required, Validators.min(0)   ]],
      inStorage: [0, [ Validators.required, Validators.min(0)   ]],
    });
  }



  onSave(){

    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched()
      return;
    }

      console.log(this.myForm.value);

    this.myForm.reset({price: 0, inStorage: 0});

  }
}
