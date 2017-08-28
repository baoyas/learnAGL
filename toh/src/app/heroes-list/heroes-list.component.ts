import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
@Component({
	moduleId: module.id,
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit{
	constructor(
		private heroService: HeroService,
		private router: Router
	){
		
	}
	ngOnInit(): void {
		this.getHeroes();
  }
	
	selectedHero : Hero;
	heroes : Hero[];
  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  };
  getHeroes():void{
  	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  gotoDetail(): void{
  	this.router.navigate(['/detail',this.selectedHero.id]);
  }
}