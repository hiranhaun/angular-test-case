import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html'
})
export class InputContainerComponent implements OnInit {

  @Input() label: string;
  @Input() errorMessage: string;
  @Input() showTip: boolean = true;
  @Input() showRequired: boolean = false;

  input: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control; //Tenta pegar uma das duas diretivas
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva NgModel ou FormControlName.');
    }
  }

  hasSucess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}