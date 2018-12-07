import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html'
})
export class FormGroupComponent implements OnInit {

  title: string = 'Testando o ngFor';

  users: User[] = [];
  
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required/*, Validators.email*/])
    })
  }

  addUser(): void {
    this.users.push(new User(this.formGroup.get('name').value, this.formGroup.get('email').value));
    this.formGroup.reset();
  }

  removeUser(user: User): void {
    this.users.splice(this.users.indexOf(user),1);
  }

}