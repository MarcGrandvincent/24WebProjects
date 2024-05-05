import { Routes } from '@angular/router';
import {RoutePath} from "./navigation/route.path";
import {IndexComponent} from "./index/index.component";
import {DetailComponent} from "./detail/detail.component";

export const routes: Routes = [
  {
    path: RoutePath.index,
    component: IndexComponent,
  },
  {
    path: RoutePath.detail,
    component: DetailComponent,
  },
  { path: '', redirectTo: RoutePath.index, pathMatch: 'full' },
  { path: '**', redirectTo: RoutePath.index, pathMatch: 'full' }
];
