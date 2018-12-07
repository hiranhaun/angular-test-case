import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgForTestComponent } from './ng-for-test/ng-for-test.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.routes';
import { FormGroupComponent } from './form-group/form-group.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NgForTestComponent,
    HomeComponent,
    FormGroupComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
