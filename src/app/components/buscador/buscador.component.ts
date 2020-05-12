import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonServicio, Poke} from '../../pokemons.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  tiposPokemon: Poke[] = [];


  constructor(private activatedRoute: ActivatedRoute,
              private _Pokemonservicio : PokemonServicio,
              private router : Router  
              ) 
    {

    this.activatedRoute.params.subscribe( parametros =>{
        this.tiposPokemon = this._Pokemonservicio.buscarTipos(parametros['termino']);
        //console.log(this.tiposPokemon);
    });

   }

  ngOnInit() {
  }

  verTipo(posicion : number){
    this.router.navigate(['/pokemon', posicion]);
  }


}
