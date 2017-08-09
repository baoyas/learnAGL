import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
// 服务http 依赖注入
import { HttpModule } from '@angular/http';

//组件类引入
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-serach/hero-serach.component';
//路由组件引入
// import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
 
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
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
export class AppModule { }
