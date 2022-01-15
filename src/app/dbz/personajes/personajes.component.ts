import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  // Propiedad Input que recibirá un arreglo de personajes
  // Si quisiéramos que la propiedad tenga otro nombre hacia el exterior y
  // personajes sea solo de uso local, se hace lo sgte: 
  // @Input('data') personajes: any[] = [];
  // ----PAra
  @Input() personajes: Personaje[] = [];

  // Esta línea es para la lección de servicios, con el arreglo de personajes
  // ya centralizado.
  // Dentro de una propiedad getter obtenemos todos los personajes usando el
  // servicio. En el .html el *ngFor accederá a este getter para iterar.
 
  //--PAra
  //get personajes() {
    //return this.dbzService.personajes;
  //}

  // Inyectamos una instancia del servicio DbzService
  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

}
