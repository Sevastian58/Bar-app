import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { drinks } from '../../interfaces/bebida';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent {

  @Input()
  public drinks:drinks[]=[]

  ngOnChanges(changes: SimpleChanges): void {
    console.log("hubieron cambios")
    if (changes["drinks"]) {
      console.log('Received drinks:', this.drinks);
      console.log('primera linea', this.drinks[0])
    }
  }

  onReceiveDrinks(drinks: drinks[]) {
    this.drinks = drinks;
  }
}
