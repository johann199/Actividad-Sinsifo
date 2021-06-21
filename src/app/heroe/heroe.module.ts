import { CommonModule} from "@angular/common";
import { NgModule} from "@angular/core";
import { HeroeComponent } from "./heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent,
        ContadorComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroeModule {
    
}