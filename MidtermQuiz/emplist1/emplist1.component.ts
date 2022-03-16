import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {
  mylist: any;

  constructor(private empservice: EmployeeserviceService) { }
  ngOnInit(){
    this.mylist = this.empservice.employeeList();
  }
}
