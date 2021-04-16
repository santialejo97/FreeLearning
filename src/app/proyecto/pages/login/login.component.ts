import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  stateOptions: any[] = [];

  value1: string = 'on';

  constructor() {}

  ngOnInit() {
    this.stateOptions = [
      { label: 'Off', value: 'off' },
      { label: 'On', value: 'on' },
    ];
  }
}
