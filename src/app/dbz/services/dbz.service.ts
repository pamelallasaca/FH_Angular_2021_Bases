import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  // Fuente de datos centralizada en el servicio
  private _personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 7500 }
  ];

  // Propiedad getter. Utilizamos el operador spread para romper la referencia
  // al arreglo principal. Es una buena práctica hacerlo así. Si alguien intentaría
  // ingresar algo en el arreglo devuelto por el getter, no se estarí agregando
  // en el arreglo principal. Cuestiones de seguridad.
  // Referencia: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() { 
    console.log('Servicio inicializado');
  }

  // Método para agregar kun nuevo personaje al arreglo principal
  agregarPersonaje(personaje: Personaje): void {
    this._personajes.push(personaje);
  }
}
