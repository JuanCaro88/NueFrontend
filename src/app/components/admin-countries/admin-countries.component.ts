import { Component, OnInit } from '@angular/core';
import { CountrieService } from 'src/app/services/countrie.service';

@Component({
  selector: 'app-admin-countries',
  templateUrl: './admin-countries.component.html',
  styleUrls: ['./admin-countries.component.css']
})
export class AdminCountriesComponent implements OnInit {

  countries: any = [];

  constructor( private servicesCountries: CountrieService ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.servicesCountries.getCountries()
     .subscribe( ( result : any ) => {
        this.countries = result.status ? result.data : [];
        console.log(this.countries);
      }, ( error:any ) => {
        this.countries = [];
      });
  };

}
