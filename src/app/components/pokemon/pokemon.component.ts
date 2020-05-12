import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServicio,Poke } from '../../pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: []
})
export class PokemonComponent implements OnInit {

  Pokemon : Poke;
 

  constructor(private activatedRoute: ActivatedRoute,
              private _pokemonServicio : PokemonServicio) 
      { 
        this.activatedRoute.params.subscribe(parametros =>{
          // console.log(parametros);
          this.Pokemon = this._pokemonServicio.getTipo(parametros['id']);
           //console.log(this.Pokemon);
        });


      }

  ngOnInit() {
  }

}
