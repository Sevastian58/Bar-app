import { Component } from '@angular/core';
import { BebidaService } from '../../services/bebida.service';
import { ActivatedRoute } from '@angular/router';
import { drinks } from '../../interfaces/bebida';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css']
})
export class ByNameComponent {
  constructor(private bebidaService:BebidaService, private _route:ActivatedRoute){}

  public bebidas:drinks[]=[];

  handleValue(value: string) {
    console.log('Value from child component:', value);

    this.buscarBebidas(value);
  }


  public buscarBebidas(term:string):void{
    this.bebidaService.searchByName(term).subscribe(response=>{
        if(response){
          this.bebidas=response;
          console.log(this.bebidas)
        }
        else{
          console.error("Invalid response format:", response);
        }
    })
  }

}
