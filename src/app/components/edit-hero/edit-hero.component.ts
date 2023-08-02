import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/superHero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent {
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService) {}

  updateHero(hero: SuperHero){
    // this.superHeroService.updateHero(hero).subscribe((heroes : SuperHero[]) => this.heroesUpdated.emit(heroes));
    this.superHeroService.updateHero(hero);
    this.heroesUpdated.emit(this.superHeroService.getSuperHeroes());
  }

  deleteHero(hero: SuperHero){
    // this.superHeroService.delteHero(hero).subscribe((heroes : SuperHero[]) => this.heroesUpdated.emit(heroes));
    this.superHeroService.deleteHero(hero);
    this.heroesUpdated.emit(this.superHeroService.getSuperHeroes());
  }

  createHero(hero: SuperHero){
    // this.superHeroService.createHero(hero).subscribe((heroes : SuperHero[]) => this.heroesUpdated.emit(heroes));
    this.superHeroService.createHero(hero);
    this.heroesUpdated.emit(this.superHeroService.getSuperHeroes());
  }
}
