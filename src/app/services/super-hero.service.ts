import { Injectable } from '@angular/core';
import { SuperHero } from '../models/superHero';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  // private url = "SuperHero";

  // constructor(private http: HttpClient) {}

  // public getSuperHeroes() : Observable<SuperHero[]> {
  //   return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  // }

  constructor() { }

  public getSuperHeroes() : SuperHero[] {
    let hero = new SuperHero();
    hero.id = 1;
    hero.name = "Spider Man";
    hero.firstName = "Peter";
    hero.lastName = "Parker";
    hero.place = "New York";

    return [hero];
  }
}
