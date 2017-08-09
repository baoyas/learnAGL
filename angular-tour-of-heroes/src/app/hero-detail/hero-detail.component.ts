import { Component, OnInit ,Input } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
// 导入switchMap运算符以便以后使用路由参数Observable。
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input () hero :Hero 
  hero :Hero 
  goBack(): void {
    this.location.back();
  }
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

}
