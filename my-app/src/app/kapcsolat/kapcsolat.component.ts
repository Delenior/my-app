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
  userEmail: string = "default";
  userName: string = "default";
  userTextMsg: string = "default";

  constructor(service: KapcsolatService) { 
    this.infok = service.getKapcsolat(); //így már a service segít az infok megszerzésében
  }

  sendMessage() {
    const usrEmail = this.userEmail;
    const usrName = this.userName;
    const txtMsg = this.userTextMsg;
    console.log("User's email: "+usrEmail+"\nUser's name: "+usrName+"\nText message: "+txtMsg);
  }
  log(x) { console.log(x); }

  ngOnInit() {
  }

}
