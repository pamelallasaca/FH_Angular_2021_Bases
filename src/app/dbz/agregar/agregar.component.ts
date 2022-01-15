import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }; 

  // --Declaramos nuestro objeto Emitter
  @Output() onNuevoPersonaje: EventEmitter<Personaje>;

  // Inyectamos una instancia del servicio DbzService
  constructor(private dbzService: DbzService) { 
    // --El Emitter emitirá un evento conteniendo un objeto del tipo Personaje
    this.onNuevoPersonaje = new EventEmitter<Personaje>();
  }

  ngOnInit(): void {
  }

  agregar(): void {
    // Si no enviamos un nombre el método no hace nada
    if (this.nuevoPersonaje.nombre.trim().length === 0) { return; }
    console.log(this.nuevoPersonaje);

    // --Emitimos un evento conteniendo un nuevo personaje
    this.onNuevoPersonaje.emit(this.nuevoPersonaje);

    // Agregmos el nuevo personaje haciendo uso del servicio
    //this.dbzService.agregarPersonaje(this.nuevoPersonaje);

    // Para limpiar los campos
    this.nuevoPersonaje = { nombre: '', poder: 0 };
  }

}
