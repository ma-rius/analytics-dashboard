import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Selection} from '../model/selection';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashboardBarService {
  private apiUrl = 'http://needminer.com/api/machine-learning/clustering?text=benziner+machen+krank&domain=emobility';

  constructor(private http: HttpClient) {
  }

  // todo solve Access-Control issue
  getData(selection: Selection): Observable<any> {
    return this.http.get(this.apiUrl);


    // console.log(JSON.stringify(a));
    // return a;
    // return [300, 52, 200, 334, 390, 330, 220];
  }
}
