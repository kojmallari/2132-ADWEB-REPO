import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {
  mylist: any;

  constructor(private empservice: EmployeeserviceService) { }
  ngOnInit(){
    this.mylist = this.empservice.employeeList();
  }

}
