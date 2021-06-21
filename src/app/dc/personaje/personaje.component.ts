import { Component, Input} from '@angular/core';
import { Personaje } from '../interface/dc.interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent  {

  @Input() personajes: Personaje[] = []; 
  
}
