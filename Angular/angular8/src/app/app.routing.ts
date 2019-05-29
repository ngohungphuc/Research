import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "child",
    //loadChildren: "./child/child.module#ChildModule"
    loadChildren: () => import(`./child/child.module`).then(m => m.ChildModule)
  }
];
