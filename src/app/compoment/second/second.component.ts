import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p>
      second works!
      C'est Youss
    </p>
  `,
  styles: [
  ]
})
export class SecondComponent implements OnInit {
  // attributs = state
  constructor() { }
  // methods = Behaviour
  ngOnInit(): void {
  }

}
