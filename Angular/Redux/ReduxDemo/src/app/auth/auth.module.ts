import { AccountComponent } from './account.component';
import { AccountRouting } from '@app/auth/auth.routing';
import { AuthEffects } from './store/effects/auth.effect';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { reducer } from './store/reducers/auth.reducer';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRouting,
    RouterModule,
    StoreModule.forFeature('authModule', reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [
     LoginComponent,
     AccountComponent
  ]
})
export class AuthModule { }
