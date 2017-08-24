import { Component } from '@angular/core';
import { Hero } from './hero';
const HEROES: Hero[] = [
  { id: 1, name: '寒冰' },
  { id: 2, name: '老牛' },
  { id: 3, name: '妖姬' },
  { id: 4, name: '阿狸' },
  { id: 5, name: '死歌' },
  { id: 6, name: '阿卡丽' },
  { id: 7, name: '武器' },
  { id: 8, name: '船长' },
  { id: 9, name: 'VN' },
  { id: 10, name: '小炮' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'baoyas-英雄之路';
	heroes = HEROES;
	selectedHero : Hero;
  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  };
}
