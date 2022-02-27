import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor() { }

  showTodayDate(){
      let ndate = new Date();
      return ndate;
  }

  myName(){
    var myname = 'Joko';
    return myname;
  }

  serviceproperty(){
    var myprops = "component created";
    return myprops;
  }

}




