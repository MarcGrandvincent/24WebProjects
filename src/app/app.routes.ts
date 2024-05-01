import { Routes } from '@angular/router';
import {RoutePath} from "./navigation/route.path";
import {TestPageComponent} from "./test-page/test-page.component";
import {TestPageTwoComponent} from "./test-page-two/test-page-two.component";

export const routes: Routes = [
  {
    path: RoutePath.test,
    component: TestPageComponent,
  },
  {
    path: RoutePath.testTwo,
    component: TestPageTwoComponent,
  },
  { path: '', redirectTo: RoutePath.test, pathMatch: 'full' },
  { path: '**', redirectTo: RoutePath.test, pathMatch: 'full' }
];
