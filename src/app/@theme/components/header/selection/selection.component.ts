import {Component, OnInit} from '@angular/core';

import {NgDateRangePickerOptions} from 'ng-daterangepicker';


@Component({
  selector: 'ngx-selection',
  styleUrls: ['./selection.component.scss'],
  templateUrl: './selection.component.html',
})
export class SelectionComponent implements OnInit {

  options: NgDateRangePickerOptions;

  constructor() {
  }

  ngOnInit() {

    this.options = {
      theme: 'teal',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'd/MM/y',
      outputFormat: 'DD/MM/YYYY',
      startOfWeek: 1,
    };
  }
}
