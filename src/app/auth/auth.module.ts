import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './state/auth.effects';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', children: [
      { path: '', redirectTo: 'login'},
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]}
];

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([]),
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
