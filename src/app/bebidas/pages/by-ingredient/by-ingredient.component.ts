import { drinks } from 'src/app/bebidas/interfaces/bebida';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BebidaService } from '../../services/bebida.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-by-ingredient',
  templateUrl: './by-ingredient.component.html',
  styleUrls: ['./by-ingredient.component.css']
})
export class ByIngredientComponent {

  constructor(private bebidaService:BebidaService, private _route:ActivatedRoute){}

  public bebidas:drinks[]=[];

  @Output()
  public onSendDrinks:EventEmitter<drinks[]> = new EventEmitter();

  handleValue(value: string) {
    console.log('Value from child component:', value);

    this.buscarBebidas(value);
  }

  ngOnInit(){
    let name = this._route.snapshot.paramMap.get("name");
    if(name!=null){
      this.buscarBebidas(name);
      console.log(this.bebidas)
    }
  }

  public buscarBebidas(term:string):void{
    this.bebidaService.searchByIngredient(term).subscribe(response=>{
        if(response){
          this.bebidas=response;
          console.log(this.bebidas)
          this.onSendDrinks.emit(this.bebidas)
        }
        else{
          console.error("Invalid response format:", response);
        }
    })
  }

}
