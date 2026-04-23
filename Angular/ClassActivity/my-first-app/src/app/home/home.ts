import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
// export class Home {
//   fname : string="shweta";
//   myroll: Number=123;

//   showbutton(){
//     this.fname='SBG';
//     alert("error while printing name")
//   }
// }

export class HomeComponent {

  students = [
    { id: 1, name: 'Shweta', branch: 'AIML' },
    { id: 2, name: 'Shreya', branch: 'CSE' },
    { id: 3, name: 'Riya', branch: 'IT' }
  ];

}




// activity: hide and show button in div 
//toggle button



























