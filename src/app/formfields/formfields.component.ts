import { Component, OnInit } from '@angular/core';
export class User {
  public name: string;
  public email: string;
  public password: string;
  public hobbies: string;
}
@Component({
  selector: 'app-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.css']
})



export class FormfieldsComponent implements OnInit {
  model = new User();
  constructor() { }

  ngOnInit(): void {

    
    
  }
 
  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking'
  ];

  onSubmit(form) {
    console.log(form.value)
  }


}
