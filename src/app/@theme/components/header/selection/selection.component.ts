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
      outputFormat: 'DD/MM/YYYY',
      startOfWeek: 1,
    };

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
