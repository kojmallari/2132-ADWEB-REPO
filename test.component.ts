import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  presentDate = new Date();
  price : number = 20000;
  price$ = 5100.8945;
  arraylist = "abcdefghijk";

  Fruits = ["Apple", "Bananas", "Oranges", "Grapes", "Mango", "Kiwi"];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  //nums: number = 10.263782;

  constructor() { }

  ngOnInit(): void {
  }

}
