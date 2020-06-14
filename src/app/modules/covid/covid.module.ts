import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidRoutingModule } from './covid-routing.module';
import { CovidViewComponent } from './pages/covid-view/covid-view.component';
import { NavbarComponent } from './pages/covid-view/components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [NavbarComponent, CovidViewComponent],
  imports: [
    CommonModule, CovidRoutingModule, NgbModule
  ],
  exports: [NavbarComponent]
})
export class CovidModule { }
