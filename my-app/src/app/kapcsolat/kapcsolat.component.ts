import { Component, OnInit } from '@angular/core';
import { KapcsolatService } from '../kapcsolat.service';

@Component({
  selector: 'app-kapcsolat',
  templateUrl: './kapcsolat.component.html',
  styleUrls: ['./kapcsolat.component.css']
})
export class KapcsolatComponent implements OnInit {
  title="Kapcsolat"
  infok;

  constructor(service: KapcsolatService) { 
    this.infok = service.getKapcsolat(); //így már a service segít az infok megszerzésében
  }

  ngOnInit() {
  }

}
