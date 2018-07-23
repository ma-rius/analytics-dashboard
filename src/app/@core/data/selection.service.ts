import {Injectable} from '@angular/core';
import {Selection} from '../model/selection';
import {Subject} from 'rxjs';

@Injectable()
export class SelectionService {
  constructor() {
  }

  private selectionSource = new Subject<Selection>();
  private selection: Selection = new Selection();

  selectionObservable = this.selectionSource.asObservable();

  submitSelection(selection: Selection) {
    this.selection = selection;
    this.selectionSource.next(selection);
  }

  getDateFrom(): string {
    // parse value from ng-daterangepicker
    return '';
  }

  getDateTo(): string {
    // parse value from ng-daterangepicker
    return null;
  }

}
