import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  Tong: number = 0;
  
  constructor() {  }

  ngOnInit(): void {
  }

  BirthdayID(value:any){
    value.max = new Date().toISOString().split("T")[0];
  }
}
