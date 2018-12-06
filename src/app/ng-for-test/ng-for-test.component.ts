import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-test',
  templateUrl: './ng-for-test.component.html'
})
export class NgForTestComponent implements OnInit {

  title: string = 'Testando o ngFor';
  user: string = "";

  users = []

  constructor() { }

  ngOnInit() {
  }

  addUser(): void {
    this.users.push(this.user);
  }

}