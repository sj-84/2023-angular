import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

/* @Injectable({
  providedIn: 'root'
}) */
@Injectable() //even for component level scope of provider @Injectable() decorator is needed so that that this class can be Injected 
export class HeroCacheService {
  hero!: Hero;
  constructor(private heroService: HeroService) {}

  fetchCachedHero(id: number) {
    if (!this.hero) { //if root provider then once this value is populated in root scope, this.hero will be populated with the value populated from the 1st time and will not be populated any more
      //if component level scope of provider then each iteration will have undefined value of hero at the beginning
      this.hero = this.heroService.getHeroById(id);
    }
    return this.hero;
  }
}
