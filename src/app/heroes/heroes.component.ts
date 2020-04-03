import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
    selector: 'app-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {

    constructor(private heroService: HeroService, private messageService: MessageService) { }

    hero: Hero = {
        id: 1,
        name: 'Tony Mathew'
    }
    heroes: Hero[];
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.messageService.add('New message added when a hero is clicked!');
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe((heroes) => {
            this.heroes = heroes;
        });
    }

    ngOnInit() {
        this.getHeroes();
    }
}