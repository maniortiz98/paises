import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-paia-input',
  templateUrl: './paia-input.component.html',
  styleUrls: ['./paia-input.component.css']
})
export class PaiaInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(res =>{
      this.onDebounce.emit(res)
    })
  }
  @Output()onEnter:EventEmitter<string> = new EventEmitter();
  @Output()onDebounce:EventEmitter<string> = new EventEmitter();
  @Input()plaseholder:String='';

  debouncer:Subject<string> = new Subject();

  termino:string = '';
  buscar(){
    this.onEnter.emit(this.termino)
   
  }
  teclaPres(){
    this.debouncer.next(this.termino);
  }

}
