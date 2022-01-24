import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input()  contador:number = 0;
  @Output() resetContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public reset(){
    this.contador = 0;
    this.resetContador.emit(this.contador);
  }

}
