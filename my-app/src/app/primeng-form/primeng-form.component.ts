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
  userPW: string;
  userNM: string;
  regNM: string;
  regPW: string;
  regPW2: string;
  

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

  authData() {
    console.log("Username: "+this.userNM+" Password: "+this.userPW);
  }

  registration() {
    if(this.regPW == this.regPW2 && this.regPW!= null)
    {
      console.log("Sikeres regisztráció!");
    }
    else console.log("Nem egyezik a két jelszó!");
  }

}
