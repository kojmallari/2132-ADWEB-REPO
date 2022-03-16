import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  constructor() { }
  employeeList(){
    let emplist = [
      {id: 101, firstname: 'Joseph', lastname: 'Dizon', email: 'jdizon@hau.edu.ph'},
      {id: 102, firstname: 'James', lastname: 'Atienza', email: 'jatienza@hau.edu.ph'},
      {id: 103, firstname: 'John', lastname: 'Cena', email: 'jcena@hau.edu.ph'},
      {id: 104, firstname: 'Robert', lastname: 'Quintana', email: 'rquintana@hau.edu.ph'},
      {id: 105, firstname: 'Joko', lastname: 'Mallari', email: 'jmallari@hau.edu.ph'}
    ]
    return emplist;
  }
}
