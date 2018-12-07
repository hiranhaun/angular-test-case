import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { FormGroupComponent } from "./form-group/form-group.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'formGroup', component: FormGroupComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);