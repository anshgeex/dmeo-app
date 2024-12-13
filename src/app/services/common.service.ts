import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  fiscalPeriodEvent = new EventEmitter();
  constructor() { }
}
