import { Injectable } from '@angular/core';
import { Hero } from './hero';
//模拟数据
//import { HEROES } from './mock-heroes';
import { Headers, Http } from '@angular/http';
//引入 toPromise
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
	private heroesUrl = "api/heroes";
	constructor( private http: Http ){};
	private handleError(error: any): Promise<any> {
		// for demo purposes only
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);	
	}
	getHeroes(): Promise<Hero[]>{
		//直接获取模拟数据
        //return Promise.resolve(HEROES);
		return this.http.get(this.heroesUrl)
			   .toPromise()
			   .then(response => response.json().data as Hero[])
			   .catch(this.handleError)
	}	
//	虚拟数据获取数据
//	getHero(id: number): Promise <Hero>{
//		return this.getHeroes()
//		       .then(heroes => heroes.find(hero => hero.id === id));
//	}
//  http获取内存数据
	getHero(id: number): Promise<Hero> {
		const url = `${this.heroesUrl}/${id}`;
  		return this.http.get(url)
	    		.toPromise()
	    		.then(response => response.json().data as Hero)
	    		.catch(this.handleError);
	}
	private headers = new Headers({"Content-Type":"application/json"});
	update(hero: Hero): Promise <Hero>{
		const url = `${this.heroesUrl}/${hero.id}`;
		return this.http
		       .put(url, JSON.stringify(hero), {headers: this.headers})
		       .toPromise()
		       .then(() => Hero)
		       .catch(this.handleError);
		
	}
	create(name: string): Promise<Hero>{
		return this.http
		        .post(this.heroesUrl,JSON.stringify({name: name}),{headers: this.headers})
		        .toPromise()
		        .then(res => res.json().data)
		        .catch(this.handleError)
	}
	delete(id: number): Promise<void>{
		const url = `${this.heroesUrl}/${id}`;
		return this.http
		        .delete(url,{headers: this.headers})
		        .toPromise()
		        .then(() => null)
		        .catch(this.handleError)
	}
}