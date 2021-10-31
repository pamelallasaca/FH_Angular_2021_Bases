import { NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador.component';

@NgModule({
    // Nos dice que contiene este módulo (componentes, piupes, etc.)
    declarations: [
        ContadorComponent
    ],
    // Qué cosas quiero que sean visibles fuera de este módulo
    exports: [
        ContadorComponent
    ]
})
export class ContadorModule {

}