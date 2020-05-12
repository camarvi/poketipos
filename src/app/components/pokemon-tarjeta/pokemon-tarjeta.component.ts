import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import {Poke } from '../../pokemons.service';


@Component({
  selector: 'app-pokemon-tarjeta',
  templateUrl: './pokemon-tarjeta.component.html',
  styles: []
})
export class PokemonTarjetaComponent implements OnInit {

  @Input() pokemon : Poke[]=[];
  @Input() posicion : number;

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  verTipo(){
    this._router.navigate(['/pokemon', this.posicion]);
  }


}
