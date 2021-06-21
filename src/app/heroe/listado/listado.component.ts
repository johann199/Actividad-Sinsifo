import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  //crear un arreglo
  heroes: string[]= ['Superman','Batman','Wonder Woman', 'Cybor', 'Flash', 'Green Lanter']
  heroeEliminado: string = ''
  eliminar(){
    this.heroeEliminado = this.heroes.shift() || ''; 
  }
}
