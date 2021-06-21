import { Component } from '@angular/core';
import { Personaje} from '../interface/dc.interface'; 


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // arreglo 

 
  personajes: Personaje[] = [
    {
      nombre: 'Green Latern',
      poder: 12000
    },
    {
      nombre: 'Cyborg',
      poder: 30000
    }
  ];

  //objeto 

  nuevo:Personaje = {
    nombre:'Flash',
    poder: 20000
  }

  cambiarNombre(event:any){
    console.log(event.target.value); 
  }

  agregar(){
   if(this.nuevo.nombre.trim().length == 0){
     return; 
   }

   console.log(this.nuevo);
   this.personajes.push(this.nuevo);
   this.nuevo = {
     nombre: '',
     poder: 0
   }
  }

}
