import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {
  person: string;
  message: string;
  createdAt: Date;
  accessLog: Array<Object> = [];


  constructor() { }

  getAccessLog() {
    return this.accessLog;
  }

  addAccessItem(person, message) {
    this.accessLog.push({ person, message, createdAt: new Date() });
    console.log(`CAPTAIN'S LOG`);
    this.accessLog.forEach(x => {
      console.log(x);
    });
  }

}


