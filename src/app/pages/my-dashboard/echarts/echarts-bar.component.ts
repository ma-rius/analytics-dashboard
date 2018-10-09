import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {DashboardBarService} from '../../../@core/data/dashboard-bar.service';
import {Subscription} from 'rxjs/Subscription';
import {SelectionService} from '../../../@core/data/selection.service';
import {Selection} from '../../../@core/model/selection';

@Component({
  selector: 'ngx-echarts-bar',
  template: `
    <div echarts [options]='options' class='echart'></div>
  `,
})
export class EchartsBarComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  selection: Selection = new Selection();
  data: Array<any>;
  topics: Array<any>;

  private subscription: Subscription;

  constructor(private theme: NbThemeService,
              private dashboardBarService: DashboardBarService,
              private _selectionService: SelectionService) {

    this.subscription = _selectionService.selectionObservable.subscribe((selection) => {
      this.selection = selection;
      this.refreshContent();
    });
  }

  refreshContent() {
    this.topics = [];
    if (this.selection.domains.artificial_intelligence) this.topics.push('AI');
    if (this.selection.domains.blockchain) this.topics.push('Blockchain');
    if (this.selection.domains.e_mobility) this.topics.push('E-mobility');
    if (this.selection.domains.internet_of_things) this.topics.push('IoT');

    this.dashboardBarService.getData(this.selection).subscribe(data => {
      this.data = [];
      if (this.selection.domains.artificial_intelligence) this.data.push(data['ai']);
      if (this.selection.domains.blockchain) this.data.push(data['blockchain']);
      if (this.selection.domains.e_mobility) this.data.push(data['emobility']);
      if (this.selection.domains.internet_of_things) this.data.push(data['iot']);

      this.options = {
        'backgroundColor': '#ffffff',
        'color': [
          '#9b92ff',
        ],
        'tooltip': {
          'trigger': 'axis',
          'axisPointer': {
            'type': 'shadow',
          },
        },
        'grid': {
          'left': '3%',
          'right': '4%',
          'bottom': '3%',
          'containLabel': true,
        },
        'xAxis': [
          {
            'type': 'category',
            'data': this.topics,
            'axisTick': {
              'alignWithLabel': true,
            },
            'axisLine': {
              'lineStyle': {
                'color': '#bbbbbb',
              },
            },
            'axisLabel': {
              'textStyle': {
                'color': '#484848',
              },
            },

          },
        ],
        'yAxis': [
          {
            'type': 'value',
            'axisLine': {
              'lineStyle': {
                'color': '#bbbbbb',
              },
            },
            'splitLine': {
              'lineStyle': {
                'color': '#ebeef2',
              },
            },
            'axisLabel': {
              'textStyle': {
                'color': '#484848',
              },
            },

          },
        ],
        'series': [
          {
            'name': 'Score',
            'type': 'bar',
            'barWidth': '60%',
            'data': this.data,
          },
        ],
      };
    });
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: [
              // 'AI',
              // 'Blockchain',
              // 'E-mobility',
              // 'IoT',
            ],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Score',
            type: 'bar',
            barWidth: '60%',
            data: [],
          },
        ],
      };

    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
