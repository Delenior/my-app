import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kapcsolat',
  templateUrl: './kapcsolat.component.html',
  styleUrls: ['./kapcsolat.component.css']
})
export class KapcsolatComponent implements OnInit {
  title="Kapcsolat"
  infok = [
    "Email: user@test.hu",
    "Telefonszám: +36101234567",
    "Cím: 7625 Pécs, Majorossy Imre u. 36."
  ]
  constructor() { }

  ngOnInit() {
  }

}
