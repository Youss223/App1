import { Component, ErrorHandler, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name ='Yes';
  constructor() { }
  sayCc(){
    alert('CC y');
  }
  
  ngOnInit(): void {  
    
  }

}
function sayCc() {
  throw new Error('Function not implemented.');
}

