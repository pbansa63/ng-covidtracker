import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidViewComponent } from './pages/covid-view/covid-view.component';

const routes: Routes = [
  { path: '', component: CovidViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule { }
