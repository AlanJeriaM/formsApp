import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {



  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStoage: new FormControl(0),
  // });

  public myForm: FormGroup;

  constructor(private fb: FormBuilder) {

    // Inicialización dentro del constructor
    this.myForm = this.fb.group({
      name: [''],
      price: [0],
      inStorage: [0],
    });
  }


  onSave(){
    console.log(this.myForm.value);

  }
}
