import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';



@Component({
  providers: [HeroService],
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  
  <h2>My Heroes</h2>
  <ul class = "heroes">
    <li *ngFor="let hero of heroes" 
    [class.selected]="hero === selectedHero"
    (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
      <!--each hero goes here -->
    </li>
  </ul>
  
   <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService){}

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }



  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}






