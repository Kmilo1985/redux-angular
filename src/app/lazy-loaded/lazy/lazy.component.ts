import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../services/sharing.service';
import {map }from 'rxjs/operators';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {
  public variableInterna$: any[] = [];
  public subject$: any;
  constructor(private sharingService: SharingService) {
    this.subject$ = this.sharingService.getInformacion().pipe(map((valor:any)=>valor * 2));
  }

  ngOnInit(): void {
  }

}
