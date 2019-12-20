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

  sendMessage()
  {
    console.log(this.userEmail+" "+this.userName+" "+this.userTextMsg);
  }
  log(x) { console.log(x); 
  }

  saveEmail(x)
  {
    this.userEmail = x;
  }
  saveName(x)
  {
    this.userName = x;
  }
  saveMsg(x)
  {
    this.userTextMsg = x;
  }

  ngOnInit() {
  }

}
