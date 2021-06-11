import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../servises/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-regin',
  templateUrl: './por-regin.component.html',
  styleUrls: ['./por-regin.component.css']
})
export class PorReginComponent implements OnInit {

  

  constructor(private servregion:PaisService) { }

  ngOnInit(): void {
  }

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva:string = '';
  paises:Country[]=[]

  actuvarRegion(region:string){
    if(region === this.regionActiva){return;}
    this.regionActiva = region
    this.paises= [];
    this.servregion.buscarRegion(region).subscribe(res =>{
      this.paises = res;
    })
  }
}
