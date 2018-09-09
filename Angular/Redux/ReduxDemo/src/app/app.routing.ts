import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from '@shared/notfound/notfound.component';
import {AccountComponent} from './auth/account.component';
import {LoginComponent} from '@app/auth';
import {PortalComponent} from './portal/portal.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'notfound',
    pathMatch: 'full'
  }, {
    path: 'account/login',
    component: LoginComponent
  }, {
    path: 'portal',
    component: PortalComponent
  }, {
    path: '**',
    redirectTo: '/notfound',
    pathMatch: 'full'
  }, {
    path: 'notfound',
    component: NotfoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
