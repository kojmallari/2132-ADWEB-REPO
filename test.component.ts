import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent{
  showData($event:any){
    console.log("Button is clicked!"); if($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}


