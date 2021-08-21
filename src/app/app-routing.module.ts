import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCountriesComponent } from './components/admin-countries/admin-countries.component';

const routes: Routes = [
  { path: 'countries', component : AdminCountriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
