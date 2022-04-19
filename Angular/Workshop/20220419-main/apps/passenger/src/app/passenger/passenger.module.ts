import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PassengerComponent } from './passenger.component';


const routes: Routes = [
  {
    path: '',
    component: PassengerComponent,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        loadChildren: () => import('@flight-workspace/passenger/feature-search')
          .then(esm => esm.PassengerFeatureSearchModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('@flight-workspace/passenger/feature-edit')
          .then(esm => esm.PassengerFeatureEditModule)
      }
    ]
  }
];


@NgModule({
  declarations: [PassengerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PassengerModule { }
