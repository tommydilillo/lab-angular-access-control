import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],

})
export class LogFormComponent implements OnInit {
  successMessage: string;
  displayMessage = 'display-none';


  constructor(private accessLog: AccessService) { }

  ngOnInit() {
  }

  addAccessItem(form) {
    console.log(form);
    this.accessLog.addAccessItem(form.value.person, form.value.message);
    console.log(`AccessLog: ${this.accessLog}`)
    this.successMessage = 'Entered into Captain"s log'
    this.displayMessage = 'message'
  }


}
