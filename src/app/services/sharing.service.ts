import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private informacionSubjet:Subject<any> = new Subject();

  constructor() { }

  getInformacion(){
    return this.informacionSubjet;
  }

  setInformacion(informacion:any[]){
    this.informacionSubjet.next(informacion);
  }
}
