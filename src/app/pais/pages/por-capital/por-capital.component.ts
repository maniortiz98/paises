import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../servises/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  constructor(private pais:PaisService) { }

  ngOnInit(): void {
  }
  termino:string ='';
  hayError:boolean = false;
  paises:Country[]= [];
  hayInfo:boolean = false

  buscar(termino:string){
    this.hayInfo = true
    this.hayError = false
    this.termino =termino
    this.pais.buscaCapital(this.termino).subscribe(res=>{
      this.paises = res;
    },(err)=>{
      this.hayError = true
      this.paises = []
      this.hayInfo = false
      setTimeout(() =>{ this.hayError = false; }, 3000);
  
    })
  }
}
