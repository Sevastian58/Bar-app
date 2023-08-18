import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router:Router){

  }

  onRedirectByName():void{
    this.router.navigate(['/bebidas/byName'])
  }

  onRedirectByIngredient():void{
    this.router.navigate(['/bebidas/byIngredient'])
  }

  onRedirectHome():void{
    this.router.navigate(['/menu/principal'])
  }
}
