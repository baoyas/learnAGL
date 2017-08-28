import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { DashboardComponent } from './dashboard/dashboard-component.component';

import { HeroService } from './hero.service';
//添加路由
import { AppRoutingModule } from './routers.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
@NgModule({
	declarations: [
		AppComponent,
		HeroDetailComponent,
		HeroesListComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	providers: [HeroService],
	bootstrap: [AppComponent]
})
export class AppModule {}