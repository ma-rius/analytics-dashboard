import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'ngx-my-dashboard',
  styleUrls: ['./my-dashboard.component.scss'],
  templateUrl: './my-dashboard.component.html',
})
export class MyDashboardComponent implements OnDestroy {
  ngOnDestroy(): void {
  }

}
