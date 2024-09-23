import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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
    this.myForm.reset(rtx5090)
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

    if(this.myForm.invalid) return;

    console.log(this.myForm.value);

    this.myForm.reset({price: 0, inStorage: 0});

  }
}
