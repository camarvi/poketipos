import { Component, OnInit } from '@angular/core';
import { PokemonServicio, Poke} from '../../pokemons.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: []
})
export class PokemonsComponent implements OnInit {

  tiposPokemon: Poke[] = [];

  constructor(private _pokemonServicio: PokemonServicio,
              private router : Router) 
    { }

  ngOnInit() {
    this.tiposPokemon = this._pokemonServicio.getTiposPokemon();
    //console.log(this.tiposPokemon);

  }

 // verTipo(posicion:number){
 //   this.router.navigate(['pokemon',posicion]);
//
 // }

}
