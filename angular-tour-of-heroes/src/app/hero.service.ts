import { Injectable } from '@angular/core';
import { Hero } from './hero';
// 英雄数组实例 置入；更改为http置入
// import { HEROES } from './mock/mock-heroes';
// Http 声明 置入
import { Headers, Http } from '@angular/http';
// toPromise扩展Observable
import 'rxjs/add/operator/toPromise';

// 实例化标志
@Injectable()
export class HeroService {
	// 从英雄模拟数据中获取英雄
	// getHeroes(): Promise<Hero[]> {
	//   return Promise.resolve(HEROES);
	// }
	// 根据url 传入的id 获取英雄信息
	private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
		// http.get返回RxJS Observable。是管理异步数据流的有效方式
		return this.http.get(this.heroesUrl)
		// get back on familiar ground by immediately converting that Observable to a Promise using the toPromise
							 .toPromise()
							// then 回调
							 .then(response => response.json().data as Hero[])
							//  返回信息
               .catch(this.handleError);
  }
// 返回错误信息
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
	// 模拟数据模型获取英雄
	// getHero(id: number): Promise<Hero> {
	// 	return this.getHeroes()
	// 						.then(heroes => heroes.find(hero => hero.id === id));
	// }
	// 模拟http 获取英雄
	getHero(id: number): Promise<Hero> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as Hero)
			.catch(this.handleError);
	}
		//创建新的请求 设置请求头类型
	private headers = new Headers({'Content-Type': 'application/json'});
// 更新英雄
	update(hero: Hero): Promise<Hero> {
		const url = `${this.heroesUrl}/${hero.id}`;
		return this.http
			.put(url, JSON.stringify(hero), {headers: this.headers})
			.toPromise()
			.then(() => hero)
			.catch(this.handleError);
	}
// 创建新的英雄
	create(name: string): Promise<Hero> {
		return this.http
			.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}
// 删除英雄
	delete(id: number): Promise<void> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}


}
