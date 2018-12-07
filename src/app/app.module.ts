import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.routes';
import { FormGroupComponent } from './form-group/form-group.component';
import { MenuComponent } from './menu/menu.component';
import { InputContainerComponent } from './shared/input-container/input-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormGroupComponent,
    MenuComponent,
    InputContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [InputContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
