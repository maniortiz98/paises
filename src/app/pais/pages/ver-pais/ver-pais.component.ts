import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../servises/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {


  verpais!:Country;

  constructor(
      private activadRoute: ActivatedRoute, 
      private getpaisalpha:PaisService) { }

  ngOnInit(): void {

    this.activadRoute.params.pipe(
      switchMap((param)=>this.getpaisalpha.getPaisAlpha(param.id)),
      tap(console.log)
    )
    .subscribe(res=> this.verpais = res)


    //this.activadRoute.params.subscribe(res=>{
      //console.log(res.id);
      //this.getpaisalpha.getPaisAlpha(res.id).subscribe(respuesta =>{
        //console.log(respuesta);
      //})
    //})
  }

}
