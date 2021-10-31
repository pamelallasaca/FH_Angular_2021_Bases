import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('init');
  }

  borrarHeroe(): void {
    console.log('Borrando...');
    // Si lo que devuelve heroes.shift() es undefined, entonces asiganmos '' 
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

}
