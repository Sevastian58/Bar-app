import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { drinks, ingredients } from '../interfaces/bebida';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BebidaService {
  constructor(private http: HttpClient) { }

  private apiUrl:string = 'https://www.thecocktaildb.com/api/json/v1/1/'

  searchIngredient(term: string): Observable<ingredients> {
    const url = `${this.apiUrl}search.php?i=${term}`;
    return this.http.get<{ ingredients: ingredients[] }>(url).pipe(
      map(response => response.ingredients[0]) // Devuelve solo el primer ingrediente
    );
  }

  searchName(term:string):Observable<drinks[]>{
    const url = `${this.apiUrl}search.php?s=${term}`
    return this.http.get<drinks[]>(url)
  }
}