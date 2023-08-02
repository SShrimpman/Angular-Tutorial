import { Component } from '@angular/core';
import { SuperHero } from './models/superHero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;
  heroToDelete?: SuperHero;

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit() : void {
    this.heroes = this.superHeroService.getSuperHeroes();
    console.log(this.heroes);
    // this.superHeroService.getSuperHeroes().subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes
  }

  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }
}
