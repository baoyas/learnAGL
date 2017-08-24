import { Component } from '@angular/core';

export class Hero{
	id : number;
	name : string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baoyas-英雄之路';
  hero : Hero = {
  	id : 1,
  	name : "风暴之子"
  };
}
