import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BuscadorComponent } from './components/buscador/buscador.component';




const APP_ROUTES : Routes = [
    { path: 'home' , component: HomeComponent },
    { path: 'about' , component: AboutComponent }, 
    { path: 'pokemons' , component: PokemonsComponent }, 
    { path: 'pokemon/:id' , component: PokemonComponent }, 
    { path: 'buscar/:termino' , component: BuscadorComponent }, 
    { path: '**', pathMatch: 'full', redirectTo : 'home' }

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); //, { useHash:true});
