import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {
  mylist: any;

  constructor(private empservice: EmployeeserviceService) { }
  ngOnInit(){
    this.mylist = this.empservice.employeeList();
  }

}
