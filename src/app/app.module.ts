import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes de la App
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

// Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

import { PokemonServicio } from './pokemons.service';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PokemonTarjetaComponent } from './components/pokemon-tarjeta/pokemon-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PokemonsComponent,
    NavbarComponent,
    HomeComponent,
    PokemonComponent,
    BuscadorComponent,
    PokemonTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [PokemonServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
