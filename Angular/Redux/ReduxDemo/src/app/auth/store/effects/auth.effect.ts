import * as authAction from '../actions/auth.actions';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import {
  catchError,
  map,
  mergeMap,
  tap
  } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  // Listen for the 'LOGIN' action
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType<authAction.Login>(authAction.LoginActionTypes.LOGIN),
    mergeMap(action =>
      this.authService.login(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: authAction.LoginActionTypes.LOGIN_SUCCESS })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: authAction.LoginActionTypes.LOGIN_FAIL }))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(authAction.LoginActionTypes.LOGIN_SUCCESS),
    tap(() => this.router.navigate(['/portal']))
  );

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) {}
}
