import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.routes';
import { FormGroupComponent } from './form-group/form-group.component';
import { MenuComponent } from './menu/menu.component';
import { InputContainerComponent } from './shared/input-container/input-container.component';
import { SnackbarComponent } from './shared/messages/snackbar/snackbar.component';
import { NotificationService } from './shared/messages/notifications.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormGroupComponent,
    MenuComponent,
    InputContainerComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [InputContainerComponent, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
