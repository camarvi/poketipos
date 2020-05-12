import { Injectable } from '@angular/core';

@Injectable()
export class PokemonServicio{

    private TiposPokemon: Poke[] = [
        {
          tipo: "Acero",
          bio: "Los Pokémon de tipo acero destacan por tener altas defensas, pero también por poseer poca velocidad. No se pueden envenenar en condiciones normales y no reciben daño por tormentas de arena. Son muy buenos luchadores; los ataques físicos raras veces les causan mucho daño. Su punto débil puede resultar la velocidad ",
          img: "assets/img/Icon_Acero.png",
          efectivo: "Efectivos contra Pokémon de tipo: Hada, Hielo y Roca",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Acero, Agua, Eléctrico y Fuego",
          debil:"Débil contra Pokémon de tipo: Tierra, Fuego y Lucha"
        },
        {
          tipo: "Volador",
          bio: "Los Pokémon de tipo volador son rápidos y con ataques que normalmente son de contacto físico, o en los que utilizan el viento a su favor. En su mayoría los Pokémon del tipo volador poseen alas, aunque hay excepciones, como Rayquaza y Gyarados. Los Pokémon de tipo volador destacan por tener altas defensas, pero también por poseer poca velocidad. No se pueden envenenar en condiciones normales y no reciben daño por tormentas de arena. Su punto débil puede resultar la velocidad ",
          img: "assets/img/Icon_Volador.png",
          efectivo: "Efectivos contra Pokémon de tipo: Bicho, Lucha y Planta",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Acero, Eléctrico y Roca",
          debil:"Débil contra Pokémon de tipo: Hielo, Eléctrico y Roca"
        },
        {
          tipo: "Agua",
          bio: "Los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición. La mayoría de estos Pokémon pertenecen también a otros tipos. Por esto se dice que los Pokémon de agua son muy adaptables y su dinamismo los hace destacarse en concursos, presentaciones y evasión de ataques. Como viven en el agua, muchos de ellos están provistos de aletas. ",
          img: "assets/img/Icon_Agua.png",
          efectivo: "Pokémon de tipo: Roca, Tierra y Fuego",
          no_efectivo:"Pokémon de tipo: Agua, Planta y Dragón",
          debil:"Pokémon de tipo: Planta y Eléctrico"
        },
        {
          tipo: "Hielo",
          bio: "Destacan por su gran resistencia y adaptación al medio frío o glaciar, como son las cimas de las montañas, las cavernas y cuevas heladas o incluso los polos. Tienen la capacidad de congelar al enemigo en combate mientras que ellos no pueden padecer dicho estado. Además pueden realizar ataques devastadores como frío polar al cual son inmunes. No reciben daño por granizo.",
          img: "assets/img/Icon_Hielo.png",
          efectivo: "Efectivos contra Pokémon de tipo: Dragón, Planta, Tierra y Volador",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Acero, Planta, Hielo y Fuego",
          debil:"Débil contra Pokémon de tipo: Acero, Roca, Fuego y Lucha"
        },
        {
          tipo: "Planta",
          bio: "A los Pokémon de tipo planta les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y son expertos en cambios de estado, pudiendo envenenar, paralizar y/o dormir al rival en combate, mientras que ellos son inmunes a drenadoras y a movimientos con esporas y polvos. Normalmente su cuerpo suele ser igual a alguna especie vegetal. Estos Pokémon suelen desarrollar hojas, flores, entre otros que tienen un crecimiento propio, pero que son controladas por el Pokémon.",
          img: "assets/img/Icon_Planta.png",
          efectivo: "Efectivos contra Pokémon de tipo: Agua, Tierra y Roca",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Acero, Volador, Planta, Bicho, Fuego, Veneno y Dragón",
          debil:"Débil contra Pokémon de tipo: Volador, Hielo, Bicho, Fuego y Veneno"
        },
        {
          tipo: "Bicho",
          bio: "Este grupo de Pokémon se caracteriza por su crecimiento rápido ya que en general no tardan mucho en evolucionar. Viven primordialmente en los bosques y zonas cercanas a estos, algunos son un poco más difíciles de divisar debido a que se encuentran en copas de árboles donde anidan. Muchos de los Pokémon de tipo bicho tienen como tipo secundario volador.",
          img: "assets/img/Icon_Bicho.png",
          efectivo: "Efectivos contra Pokémon de tipo: Planta, Psíquico y Siniestro",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Acero, Volador, Fuego, Lucha, Hada, Veneno y Dragón",
          debil:"Débil contra Pokémon de tipo: Volador, Roca y Fuego"
          },
        {
          tipo: "Eléctrico",
          bio: "Los Pokémon de tipo eléctrico tienen hábitats variados, desde bosques, praderas, ciudades y centrales eléctricas.Los Pokémon de tipo eléctrico almacenan electricidad estática en sus cuerpos y luego la liberan en forma de un ataque como rayo. Cuando absorbe demasiada electricidad , resulta muy peligroso porque entonces tiene demasiada energía contenida en su cuerpo que no puede ser liberada en poco tiempo y se enferman.",
          img: "assets/img/Icon_Electrico.png",
          efectivo: "Efectivos contra Pokémon de tipo: Agua y Volador",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Planta, Eléctico y Dragón",
          debil:"Débil contra Pokémon de tipo: Tierra"
        },
        {
          tipo: "Normal",
          bio: "El tipo normal abarca la mayor cantidad y variedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon.",
          img: "assets/img/Icon_Normal.png",
          efectivo: "Efectivos contra Pokémon de tipo: Ninguno",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Acero y Roca",
          debil:"Débil contra Pokémon de tipo: Lucha"
        },
        {
          tipo: "Roca",
          bio: "El tipo roca destaca por su gran defensa frente a ataques físicos. Sin embargo, tiene en su contra que presenta varias debilidades con respecto a otros tipos, y los Pokémon de este tipo no se caracterizan por ser muy veloces. Cabe destacar que la mayoría de los movimientos de tipo roca (sobre todo los físicos) poseen baja precisión a la hora de atacar.",
          img: "assets/img/Icon_Roca.png",
          efectivo: "Efectivos contra Pokémon de tipo: Volador, Hielo, Bicho y Fuego",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Acero, Tierra y Lucha",
          debil:"Débil contra Pokémon de tipo: Acero, Agua, Planta, Tierra y Lucha"
        },
        {
          tipo: "Tierra",
          bio: "Los Pokémon de este tipo tienen temor al tipo agua, igual que los de tipo roca, pero a partir de la segunda generación hay excepciones. Una desventaja de este tipo es que muchos de ellos no pueden despegarse del suelo, como Diglett, por eso los Pokémon de tipo volador son inmunes a algunos ataques, como terremoto. Pero muchos de ellos aprenden movimientos de tipo roca que son muy eficaces al tipo volador.",
          img: "assets/img/Icon_Tierra.png",
          efectivo: "Efectivos contra Pokémon de tipo: Acero, Elèctrico, Roca, Fuego y Veneno",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Planta y Bicho",
          debil:"Débil contra Pokémon de tipo: Agua, Hielo y Planta"
        },
        {
          tipo: "Fuego",
          bio: "Los Pokémon de tipo fuego basan sus ataques principalmente en el control de este elemento y la mayoría pueden quemar al Pokémon oponente, mientras que ellos no sufren quemaduras.Son apasionados y algunos de mal carácter (como el Charizard de Ash), viven en cuevas o zonas rocosas y muy áridas, y más probable aún cerca de volcanes activos.",
          img: "assets/img/Icon_Fuego.png",
          efectivo: "Efectivos contra Pokémon de tipo: Acero, Hielo, Planta y Bicho",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Agua, Roca, Fuego y Dragón",
          debil:"Débil contra Pokémon de tipo: Agua, Roca y Tierra"
        },
        {
          tipo: "Lucha",
          bio: "Este tipo de Pokémon son especialistas en el combate cuerpo a cuerpo, se podría decir que son opuestos a los del tipo psíquico, ya que estos últimos dependen del ataque especial mientras que los del tipo lucha se especializan en ataque físico, en su mayoría sus características están equilibradas, (como Hitmontop o Medicham) o veloces luchadores con grandes puntos de ataque (como Lucario e Infernape).",
          img: "assets/img/Icon_Lucha.png",
          efectivo: "Efectivos contra Pokémon de tipo: Acero, Hielo, Normal, Roca y Siniestro",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Volador, Bicho, Hada, Psíquico y Veneno",
          debil:"Débil contra Pokémon de tipo: Volador, Hada y Psíquico"
        },
        {
          tipo: "Hada",
          bio: "El tipo hada representa principalmente la pureza y el poder mágico, siendo esto lo más característico de esta especie. Se suelen encontrar principalmente en zonas al aire libre rodeadas de flores y/o elementos similares. Fue introducido para equilibrar el poder superior de los Pokémon de tipo dragón, tal y como se hizo en la segunda generación con el tipo acero y con el tipo siniestro",
          img: "assets/img/Icon_Hada.png",
          efectivo: "Efectivos contra Pokémon de tipo: Lucha, Dragón y Siniesto",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Acero, Fuego y Veneno ",
          debil:"Débil contra Pokémon de tipo: Acero y Veneno"
        },
        {
          tipo: "Psíquico",
          bio: "Los Pokémon de este tipo suelen ser muy inteligentes y a menudo se les atribuye capacidades como prever acciones futuras, hacer levitar objetos o incluso a ellos mismos. Se puede localizar a este tipo de Pokémon en cuevas o zonas cercanas a estas. Durante la primera generación solo tenían como debilidad el tipo bicho, pues no existía todavía el tipo siniestro y eran inmunes al tipo fantasma.",
          img: "assets/img/Icon_Psiquico.png",
          efectivo: "Efectivos contra Pokémon de tipo: Lucha y Veneno ",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Acero y Psíquico",
          debil:"Débil contra Pokémon de tipo: Bicho, Dragón y Siniestro"
        },
        {
          tipo: "Veneno",
          bio: "El tipo veneno es frecuente en Pokémon que suelen encontrarse en zonas donde hay cuevas, pantanos o en sus cercanías. Muchos Pokémon de este tipo pueden expulsar de sus cuerpos distintas sustancias nocivas como gases, ácidos, venenos, esporas u olores malolientes. También los Pokémon del tipo veneno están basados en seres vivientes que son generalmente venenosos.",
          img: "assets/img/Icon_Veneno.png",
          efectivo: "Efectivos contra Pokémon de tipo: Planta y Hada",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Roca, Tierra, Veneno y Dragón",
          debil:"Débil contra Pokémon de tipo: Tierra y Psíquico"
        },
        {
          tipo: "Dragón",
          bio: "Es un tipo elemental ancestral. Muchos de los últimos Pokémon legendarios descubiertos, considerados deidades, son del tipo dragón: Rayquaza, Giratina, Dialga, Palkia, Zekrom, Reshiram, Kyurem o Zygarde. Otros Pokémon de este tipo se caracterizan por ser difíciles de atrapar y entrenar. ",
          img: "assets/img/Icon_Dragon.png",
          efectivo: "Efectivos contra Pokémon de tipo: Dragón",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Acero",
          debil:"Débil contra Pokémon de tipo: Hielo, Hada y Dragón"
        },
        {
          tipo: "Fantasma",
          bio: "Se caracteriza por ser un tipo con pocos Pokémon y movimientos, también porque sus Pokémon poseen generalmente pocos PS. En combate resultan muy útiles, ya que poseen 2 inmunidades, al tipo lucha y al tipo normal de las cuales los ataques son muy comunes.",
          img: "assets/img/Icon_Fantasma.png",
          efectivo: "Efectivos contra Pokémon de tipo: Psíquico y Fantasma",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Siniestro",
          debil:"Débil contra Pokémon de tipo: Fantasma y Siniestro"
        },
        {
          tipo: "Siniestro",
          bio: "Los Pokémon de tipo siniestro son en su mayoría agresivos y misteriosos, por lo tanto encontrar un tipo siniestro es un poco complicado. Fueron agregados en la segunda generación para presentar una debilidad ante el tipo psíquico, que hasta entonces sólo tenía el tipo bicho (cuyos movimientos no representaban una amenaza) y el tipo fantasma (situación parecida respecto a los movimientos). ",
          img: "assets/img/Icon_Siniestro.png",
          efectivo: "Efectivos contra Pokémon de tipo: Psíquico y Fantasma",
          no_efectivo:"Poco efectivos contra Pokémon de tipo: Lucha, Hada y Siniestro",
          debil:"Débil contra Pokémon de tipo: Bicho, Lucha y Hada"
        },
      
      ];


    constructor(){

        console.log('Servicio Pokemon Listo');
    }

    getTiposPokemon(){
        let listaPokemon : Poke[] = []
        let contador: number = 0;
        
        for (let TipoPoke of this.TiposPokemon){
          TipoPoke.posicion = contador;
          listaPokemon.push(TipoPoke);
          contador ++;
        }

        return listaPokemon;
    }

    getTipo(indice:number):Poke{
      return this.TiposPokemon[indice];
    }


    buscarTipos(termino : string){
      let arrayPokemon: Poke[]=[];
      let contador: number = 0;

      termino = termino.toLowerCase();

      for (let tipoPoke of this.TiposPokemon){
       let nombre = tipoPoke.tipo.toLowerCase()
       if (nombre.indexOf(termino)>=0){
          tipoPoke.posicion = contador;
          arrayPokemon.push(tipoPoke);
       } 
       contador++;
      }
      return arrayPokemon;

    }

}

export interface Poke{
    tipo:string;
    bio:string;
    img:string;
    efectivo: string;
    no_efectivo: string;
    debil: string;
    posicion?:number;
}