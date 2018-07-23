import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Selection} from '../model/selection';

@Injectable()
export class DashboardBarService {
  private apiUrl = 'http://needminer.com/api/machine-learning/clustering?text=benziner+machen+krank&domain=emobility';

  constructor(private http: HttpClient) { }

  getData(selection: Selection): any {
    // return this.http.get(this.apiUrl);
    return [300, 52, 200, 334, 390, 330, 220];
  }
}
