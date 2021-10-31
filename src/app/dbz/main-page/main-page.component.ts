import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // Arreglo de objetos tipo Personaje (Almacén de datos en memoria)ç
  // Aquí, en el componente padre para manejar @Inputs y @Outputs
  // Movido a  dbz.service.ts
  // personajes: Personaje[] = [
  //   { nombre: 'Goku', poder: 15000 },
  //   { nombre: 'Vegeta', poder: 7500 }
  // ];

   // Esto es solo para qu eno salgan errores en la plantilla en las 
  // lecciones de la 5 a la 8
  personajes: Personaje[] = [];

  // Objeto nuevoPersonaje del tipo Personaje
  // Movido a AgregarComponent en la tarea de la lección 11

  // nuevo: Personaje = {
  //   nombre: 'Truncks',
  //   poder: 10000
  // }; 

  // Esto es solo para qu eno salgan errores en la plantilla en las 
  // lecciones de la 5 a la 8
  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }; 

  constructor() { }

  ngOnInit(): void {
  }

  // Método manejador del evento onNuevoPersonaje (Emitter) del 
  // componente AgregarComponente
  // agregarPersonaje(personaje: Personaje): void {
  //   this.personajes.push(personaje);
  //   console.log(this.personajes);
  // }

  // Esto es solo para qu eno salgan errores en la plantilla en las 
  // lecciones de la 5 a la 8
  agregar(): void {

  }


}
