import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Selection} from '../model/selection';
import {Observable} from 'rxjs/Observable';
import {formatDate} from '@angular/common';

@Injectable()
export class DashboardPieService {
  // TODO change to Pie-Chart API
  private apiUrl = 'http://129.13.133.28/api/bar-chart-by-time-and-subject/';


  constructor(private http: HttpClient) {
  }


  getData(selection: Selection): Observable<any> {
    const params = new HttpParams()
      .set('start', new Date(selection.dateFrom).valueOf().toString())
      .set('end', new Date(selection.dateTo).valueOf().toString())
      .set('ai', '1')
      .set('blockchain', '1')
      .set('emobility', '1')
      .set('iot', '1');
    return this.http.get(this.apiUrl, {params: params});
  }
}
