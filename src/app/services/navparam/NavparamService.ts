import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavparamService {

  private myParams: any;

  constructor() { }

  set param(l) {
    this.myParams = l;
  }

  get param() {
    const t = this.myParams;
    this.myParams = undefined;
    return t;
  }

}
