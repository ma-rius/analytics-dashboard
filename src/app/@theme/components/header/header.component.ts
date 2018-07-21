import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NgxDateRangePickerOptions } from 'ngx-daterangepicker';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  options: NgxDateRangePickerOptions;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.daimler);

    this.options = {
      theme: 'green', //  customized in styles.scss, color changed manually in module ($cyan in colors.sass)
      labels: ['Start', 'End'],
      menu: [
        {alias: 'td', text: 'Today', operation: '0d'},
        {alias: 'tm', text: 'This Month', operation: '0m'},
        {alias: 'lm', text: 'Last Month', operation: '-1m'},
        {alias: 'tw', text: 'This Week', operation: '0w'},
        {alias: 'lw', text: 'Last Week', operation: '-1w'},
        {alias: 'ty', text: 'This Year', operation: '0y'},
        {alias: 'ly', text: 'Last Year', operation: '-1y'},
        {alias: 'ny', text: 'Next Year', operation: '+1y'},
        {alias: 'lyt', text: 'Last year from today', operation: '-1yt'},
      ],
      dateFormat: 'YYYY-MM-DD',
      outputFormat: 'DD-MM-YYYY',
      startOfWeek: 0,
      outputType: 'object',
      locale: 'es',
      date: {
        from: {
          year: 2017,
          month: 3,
          day: 5,
        },
        to: {
          year: 2017,
          month: 3,
          day: 6,
        },
      },
    };
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
