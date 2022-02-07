import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent{
  clientName = "";
  clientSubj = "";
  prelimGrade = 0
  midtermGrade = 0
  finalGrade = 0
  average = (this.prelimGrade + this.midtermGrade + this.finalGrade)/3
}
