import {Component, OnChanges, OnInit} from '@angular/core';

import {NgDateRangePickerOptions} from 'ng-daterangepicker';
import {Selection} from '../../../../@core/model/selection';
import {SelectionService} from '../../../../@core/data/selection.service';


@Component({
  selector: 'ngx-selection',
  styleUrls: ['./selection.component.scss'],
  templateUrl: './selection.component.html',
})
export class SelectionComponent implements OnInit {

  options: NgDateRangePickerOptions;
  selection: Selection = new Selection();

  constructor(private selectionService: SelectionService) {
  }

  ngOnInit() {
    // DateRangePicker options
    this.options = {
      theme: 'teal',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'd/MM/y',
      outputFormat: 'MM/DD/YYYY',
      startOfWeek: 1,
    };

    // set initial value of dateFrom and DateTo (changed when user sets a new date)
    // when range: 'tm', the initial value is 'this month',
      // i.e. the range from the first to the last day of the current month

    // get last day of the current month
    const now = new Date();
    const month = now.getMonth() + 1; // January gives 0
    const lastDayInMonth = new Date(now.getFullYear(), month, 0).getDate();

  this.selection.dateFrom = month.toString() + '/' + '01/' + now.getFullYear().toString();
  this.selection.dateTo = month.toString() + '/' + lastDayInMonth.toString() + '/' + now.getFullYear().toString();

  }
  setDateSelection() {
    // alert(JSON.stringify(this.selection));
    this.selection.dateFrom = JSON.stringify(this.selection.datepicker_value).split('-')[0].replace('\"', '');
    this.selection.dateTo = JSON.stringify(this.selection.datepicker_value).split('-')[1].replace('\"', '');
    this.selectionService.submitSelection(this.selection);
  }
  setAiSelection() {
    this.selection.domains.artificial_intelligence = !this.selection.domains.artificial_intelligence;
    this.selectionService.submitSelection(this.selection);
  }

  setEmSelection() {
    this.selection.domains.e_mobility = !this.selection.domains.e_mobility;
    this.selectionService.submitSelection(this.selection);
  }

  setBcSelection() {
    this.selection.domains.blockchain = !this.selection.domains.blockchain;
    this.selectionService.submitSelection(this.selection);
  }

  setIoTSelection() {
    this.selection.domains.internet_of_things = !this.selection.domains.internet_of_things;
    this.selectionService.submitSelection(this.selection);
  }
}
