import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  public contador: number;


  constructor(private store: Store<AppState>) {
    this.contador = 0;
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  public multiplicar() {
    this.store.dispatch(actions.multiplicar({ numero: 3 }))
  }

  public dividir() {
    this.store.dispatch(actions.dividir({ numero: 2 }))
  }
}

