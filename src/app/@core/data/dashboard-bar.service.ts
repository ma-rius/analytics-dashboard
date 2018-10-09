import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Selection} from '../model/selection';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashboardBarService {
  private apiUrl = 'http://129.13.133.28/api/bar-chart-by-time-and-subject/';

  constructor(private http: HttpClient) {
  }


  getData(selection: Selection): Observable<any> {
    const ai = 1 ? selection.domains.artificial_intelligence : 0;
    const blockchain = 1 ? selection.domains.blockchain : 0;
    const emobility = 1 ? selection.domains.e_mobility : 0;
    const iot = 1 ? selection.domains.internet_of_things : 0;
    const params = new HttpParams()
      .set('start', new Date(selection.dateFrom).valueOf().toString())
      .set('end', new Date(selection.dateTo).valueOf().toString())
      .set('ai', ai.toString())
      .set('blockchain', blockchain.toString())
      .set('emobility', emobility.toString())
      .set('iot', iot.toString());
    return this.http.get(this.apiUrl, {params: params});
  }
}
