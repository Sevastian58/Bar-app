import { Component } from '@angular/core';
import { drinks } from 'src/app/bebidas/interfaces/bebida';
import { BebidaService } from 'src/app/bebidas/services/bebida.service';

@Component({
  selector: 'app-main-descripcion',
  templateUrl: './main-descripcion.component.html',
  styleUrls: ['./main-descripcion.component.css']
})
export class MainDescripcionComponent {

  public drink:drinks={"idDrink": '',
  "strDrink": '' ,
  "strDrinkAlternate": '',
  "strTags": '',
  "strVideo": '' ,
  "strCategory": '',
  "strIBA": '',
  "strAlcoholic": '',
  "strGlass": '',
  "strInstructions": '',
  "strInstructionsES": '',
  "strInstructionsDE": '',
  "strInstructionsFR": '',
  "strInstructionsIT": '',
  "strInstructionsZH-HANS": '',
  "strInstructionsZH-HANT": '',
  "strDrinkThumb": '',
  "strIngredient1": '',
  "strIngredient2": '',
  "strIngredient3": '',
  "strIngredient4": '',
  "strIngredient5": '',
  "strIngredient6": '',
  "strIngredient7": '',
  "strIngredient8": '',
  "strIngredient9": '',
  "strIngredient10": '',
  "strIngredient11": '',
  "strIngredient12": '',
  "strIngredient13": '',
  "strIngredient14": '',
  "strIngredient15": '',
  "strMeasure1": '',
  "strMeasure2": '',
  "strMeasure3": '',
  "strMeasure4": '',
  "strMeasure5": '',
  "strMeasure6": '',
  "strMeasure7": '',
  "strMeasure8": '',
  "strMeasure9": '',
  "strMeasure10": '',
  "strMeasure11": '',
  "strMeasure12": '',
  "strMeasure13": '',
  "strMeasure14": '',
  "strMeasure15": '',
  "strImageSource": '',
  "strImageAttribution": '',
  "strCreativeCommonsConfirmed": '',
  "dateModified": '',
  "drinks":[]}

   listDrinks:drinks[] = [];
   listIdDrinks:string[]=["11000","11003","11007","17191"];

  constructor(private serBebida:BebidaService){
    this.obtenerDrinksMostPopular();
  }


  ngOnInit(){
    this.obtenerDrinkRandom();
    console.log(this.drink);
  }


  obtenerDrinkRandom():void{
    this.serBebida.searchRandom().subscribe(response=>{
      if(response){
        this.drink=response.drinks[0];
      }
    })
  }

  obtenerDrinksMostPopular():void{
    this.listIdDrinks.forEach(d=>{
      this.serBebida.searchById(d).subscribe(response=>{
        if(response){
          this.listDrinks.push(response.drinks[0]);
        }
      })
    })

    console.log(this.listDrinks);
  }



}
