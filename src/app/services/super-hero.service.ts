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

  // public updateHero(hero: SuperHero) : Observable<SuperHero[]> {
  //   return this.http.put<SuperHero[]>(`${environment.apiUrl}/${this.url}`, hero);
  // }

  // public createHero(hero: SuperHero) : Observable<SuperHero[]> {
  //   return this.http.post<SuperHero[]>(`${environment.apiUrl}/${this.url}`, hero);
  // }

  // public deleteHero(hero: SuperHero) : Observable<SuperHero[]> {
  //   return this.http.delete<SuperHero[]>(`${environment.apiUrl}/${this.url}/${hero.id}`, hero);
  // }

  constructor() {
    this.initializeSuperHeroes();
  }

  public getSuperHeroes(): SuperHero[] {
    const data = localStorage.getItem('superHeroes');
    return data ? JSON.parse(data) : [];
  }

  private initializeSuperHeroes(): void {
    const heroes = this.getSuperHeroes();
    if (heroes.length === 0) {
      const hero = new SuperHero();
      hero.id = 1;
      hero.name = "Spider Man";
      hero.firstName = "Peter";
      hero.lastName = "Parker";
      hero.place = "New York";

      this.saveHero([hero]);
    }
  }

  public updateHero(hero: SuperHero): void {
    let heroes = this.getSuperHeroes();

    const heroIndex = heroes.findIndex(h => h.id === hero.id);

    if (heroIndex !== -1) {
      heroes[heroIndex] = hero;
      this.saveHero(heroes);
    }
  }

  public createHero(hero: SuperHero): void {
    let heroes = this.getSuperHeroes();

    const existingIds = heroes.map(h => h.id);
    const highestId = existingIds.length > 0 ? Math.max(...existingIds as number[]) : 0;
    hero.id = highestId + 1;

    heroes.push(hero);
    this.saveHero(heroes);
  }

  public deleteHero(hero: SuperHero): void {
    let heroes = this.getSuperHeroes();

    const heroIndex = heroes.map(h => h.id).indexOf(hero.id);

    if (heroIndex !== -1) {
      heroes.splice(heroIndex, 1);
      this.saveHero(heroes);
    }
  }

  private saveHero(heroes: SuperHero[]): void {
    localStorage.setItem('superHeroes', JSON.stringify(heroes));
  }
}
