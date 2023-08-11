import { Component } from '@angular/core';
import { BebidaService } from '../../../bebidas/services/bebida.service';
import { drinks, ingredients } from 'src/app/bebidas/interfaces/bebida';

@Component({
  selector: 'app-main-ingredients',
  templateUrl: './main-ingredients.component.html',
  styleUrls: ['./main-ingredients.component.css']
})
export class MainIngredientsComponent {

  constructor(private bebidaService:BebidaService){}

  ngOnInit(): void {
    this.llenarIngredientes(); // Llama al método al inicializar el componente
  }
  public ingredients: ingredients[]=[];


  public llenarIngredientes():void{
    console.log('se ejecuta el metodo')
    let ingredientes: string[]=['gin', 'applejack', 'scotch', 'brandy', 'amaretto', 'tea', 'champagne', 'tequila']
    for(let item of ingredientes){
      this.bebidaService.searchIngredient(item).subscribe(response => {
        if (response.idIngredient) {
          this.ingredients.push(response);
          console.log('Ingredientes actuales:', this.ingredients);
        }
      })
    }
  }



}
