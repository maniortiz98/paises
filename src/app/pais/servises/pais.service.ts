import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais-interface';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpparams(){
    return new  HttpParams().set('fields', 'name;capital;population;flag;alpha2Code');
  }

  
  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url,{params:this.httpparams})
  }
  buscaCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url,{params:this.httpparams})
  }
  getPaisAlpha(id:string):Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url)
  }
  buscarRegion(reg:string):Observable<Country[]>{
    
    const url = `${this.apiUrl}/region/${reg}`
    return this.http.get<Country[]>(url,{params:this.httpparams})
  }
}
