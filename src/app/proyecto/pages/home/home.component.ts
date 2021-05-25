import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `.example-header-image {
      background-image: url('https://holatelcel.com/wp-content/uploads/2020/03/deadpool.jpg');
      background-size: cover;
    }`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
