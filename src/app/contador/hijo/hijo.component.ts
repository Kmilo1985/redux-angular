import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input()  contador:number = 0;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public multiplicar(){
    this.contador *= 2
    this.cambioContador.emit(this.contador);
  }

  public dividir(){
    this.contador /= 2
    this.cambioContador.emit(this.contador);

    
  }
  public reset(event:number){
    this.cambioContador.emit(event);
  }
}

