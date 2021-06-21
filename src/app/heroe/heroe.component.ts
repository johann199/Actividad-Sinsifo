import {Component} from '@angular/core';
import { HeroeModule } from './heroe.module';
@Component ({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
nombre: string = 'Batman';
edad:number =45; 

obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`
}
cambiarNombre():void{
    this.nombre= 'Superman';
}
cambiarEdad():void{
    this.edad= 33;
}
}