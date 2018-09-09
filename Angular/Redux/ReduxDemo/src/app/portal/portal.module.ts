import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalComponent } from './portal.component';
import { PortalRouting } from './portal.routing';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule, PortalRouting, RouterModule
  ],
  declarations: [PortalComponent],
  exports: [],
  providers: []
})
export class PortalModule {}
