import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../servises/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor(private pais:PaisService) { }

  ngOnInit(): void {
  }

  termino:string ='';
  hayError:boolean = false;
  paises:Country[]= [];
  hayInfo:boolean = false;
  paisesSugerido:Country[]= [];
  mostrarSigerencias:boolean = false;

  buscar(termino:string){

    this.mostrarSigerencias = false
    this.hayInfo = true
    this.hayError = false
    this.termino =termino
    this.pais.buscarPais(this.termino).subscribe(res=>{
      this.paises = res;
    },(err)=>{
      this.hayError = true
      this.paises = []
      this.hayInfo = false
      setTimeout(() =>{ this.hayError = false; }, 3000);
    
    })
  }

  sugerencias(termino:any){
    this.hayError=false;
    this.termino = termino
    this.mostrarSigerencias = true
    this.pais.buscarPais(termino).subscribe(res =>{
      this.paisesSugerido = res.slice(0,5)
    },(err)=>{
      this.paisesSugerido = []
    })
  }
  buscarSugerido(termino:string){
    this.buscar(termino);
  }

}
