import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService : HeroService) { }

	ngOnInit(): void{
		this.heroService.getHeroes()
		.then(heroes => this.heroes = heroes.slice(1,5))
	}
	heroes : Hero[] =[];
	
}
