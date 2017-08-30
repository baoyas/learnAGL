import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
	createDb(){
		let heroes = [			
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
	    return {heroes};
	}
	
}
