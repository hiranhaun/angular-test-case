import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';
import { NotificationService } from '../shared/messages/notifications.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html'
})
export class FormGroupComponent implements OnInit {

  title: string = 'Example';

  users: User[] = [];
  
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required/*, Validators.email*/])
    })
  }

  addUser(): void {
    let usuario: User = new User(this.formGroup.get('name').value, this.formGroup.get('email').value);
    this.users.push(usuario);
    this.formGroup.reset();
    this.notificationService.notify(`Você adicionou o usuário ${usuario.name}`);
  }

  removeUser(user: User): void {
    this.users.splice(this.users.indexOf(user),1);
  }

}