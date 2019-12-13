import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KapcsolatService {
infok = [
    "Email: user@test.hu",
    "Telefonszám: +36101234567",
    "Cím: 7625 Pécs, Majorossy Imre u. 36."
  ]
  getKapcsolat() {
    return this.infok; 
  }
  constructor() { }
}
