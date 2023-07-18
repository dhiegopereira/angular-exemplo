import { Component, OnInit } from '@angular/core';

interface Pokemon {
  name: string;
}

@Component({
  selector: 'app-pokemon-list',
  template: `
    <h2>Pokémon List</h2>
    <input type="text" [(ngModel)]="filterText" (input)="filterPokemons()" placeholder="Filter by name" />
    <ul>
      <li *ngFor="let pokemon of filteredPokemons">{{ pokemon.name }}</li>
    </ul>
  `,
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  filterText: string = '';

  async ngOnInit() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await response.json();
      this.pokemons = data.results;
      this.filteredPokemons = [...this.pokemons]; // Initialize filteredPokemons with all pokemons initially
    } catch (error) {
      console.error('Error:', error);
    }
  }

  filterPokemons() {
    if (this.filterText.trim().length === 0) {
      this.filteredPokemons = [...this.pokemons]; // Reset filteredPokemons to show all pokemons
    } else {
      this.filteredPokemons = this.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.filterText.trim().toLowerCase())
      );
    }
  }
}
