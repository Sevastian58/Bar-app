import { Component, Input, OnInit } from '@angular/core';
import { drinks } from '../../interfaces/bebida';
import { ActivatedRoute, Router } from '@angular/router';
import { BebidaService } from '../../services/bebida.service';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent implements OnInit{

  @Input()
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

  constructor(private _route:ActivatedRoute, private bebidaService : BebidaService,
              private router:Router){}
  ngOnInit(){
    let id = this._route.snapshot.paramMap.get("id");
    if(id!=null){
      this.buscarPorId(id)
    }
  }

  buscarPorId(id:string):void{
    this.bebidaService.searchById(id).subscribe(response => {
      if(response!=null){
        this.drink=response.drinks[0];
        console.log(response)
      }
      else{
        console.log("es vacio")
      }
    })

  }

  public onBack():void{
    this.router.navigate(['/bebidas/by-ingredient']);
  }
}
