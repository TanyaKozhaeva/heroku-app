import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable()
export class AddFormService {
  addingCard = new EventEmitter();
  constructor() { }

}
