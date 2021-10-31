import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Nos dice que contiene este módulo (componentes, piupes, etc.)
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Qué cosas quiero que sean visibles fuera de este módulo
    exports: [
        HeroeComponent,
        ListadoComponent
    ],
    // Sólo módulos que importaremos
    imports: [
        // Para que puedan funcionar cosas como las directivas
        CommonModule
    ]
})
export class HeroesModule {

}
