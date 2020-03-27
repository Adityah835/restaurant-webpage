import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  constructor() {
    console.log("constructor called")
   }

  ngOnInit(): void {
    console.log("ngOnInit called")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called")
  }

}
