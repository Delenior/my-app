import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
}

@Component({
  selector: 'app-primeng-form',
  templateUrl: './primeng-form.component.html',
  styleUrls: ['./primeng-form.component.css']
})
export class PrimengFormComponent implements OnInit {

  selectedCity: City;

  

  constructor() {
      
   }
  cities = [
    { name: "Pécs" },
    { name: "Budapest" },
    { name: "Szeged" },
    { name: "Marosvásárhely" }
  ];
  
  ngOnInit() {
  }

  public getSelectedCity() {
    console.log(this.selectedCity);
  }

}
