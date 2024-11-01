import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'createUser', component: CreateUserComponent }
];
