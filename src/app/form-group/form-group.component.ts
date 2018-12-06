import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html'
})
export class FormGroupComponent implements OnInit {

  title: string = 'Testando o ngFor';

  users = [];
  
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required])
    })
  }

  addUser(): void {
    this.users.push(this.formGroup.get('name').value);
    this.formGroup.get('name').setValue(undefined);
  }

}