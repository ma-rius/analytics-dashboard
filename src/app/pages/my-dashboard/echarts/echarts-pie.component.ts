import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {NbColorHelper, NbThemeService} from '@nebular/theme';
import {Selection} from '../../../@core/model/selection';
import {Subscription} from 'rxjs/Subscription';
import {SelectionService} from '../../../@core/data/selection.service';
import {DashboardPieService} from '../../../@core/data/dashboard-pie.service';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  selection: Selection = new Selection();
  data: Array<any>;
  topics: Array<any>;

  // from Nebular Theme
  palette$1 = {
    primary: '#7659ff',
    success: '#00d977',
    info: '#0088ff',
    warning: '#ffa100',
    danger: '#ff386a',
  };
  colors = [
    NbColorHelper.tint(this.palette$1.primary, 30),
    NbColorHelper.tint(this.palette$1.info, 30),
    NbColorHelper.tint(this.palette$1.danger, 30),
    NbColorHelper.tint(this.palette$1.success, 30),
  ];

  private subscription: Subscription;

  constructor(private theme: NbThemeService,
              private dashboardPieService: DashboardPieService,
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

    this.dashboardPieService.getData(this.selection).subscribe(data => {
      this.data = [];
      if (this.selection.domains.artificial_intelligence) this.data.push({value: data['ai'], name: 'AI'});
      if (this.selection.domains.blockchain) this.data.push({value: data['blockchain'], name: 'Blockchain'});
      if (this.selection.domains.e_mobility) this.data.push({value: data['emobility'], name: 'E-mobility'});
      if (this.selection.domains.internet_of_things) this.data.push({value: data['iot'], name: 'IoT'});

      this.options = {
        'backgroundColor': echarts.bg,
        'color': this.colors,
        'tooltip': {
          'trigger': 'item',
          'formatter': '{a} <br/>{b} : {c} ({d}%)',
        },
        'legend': {
          'orient': 'vertical',
          'left': 'left',
          'data': this.topics,
          'textStyle': {
            'color': this.colors,
          },
        },
        'series': [
          {
            'name': 'Total Count',
            'type': 'pie',
            'radius': '80%',
            'center': ['50%', '50%'],
            'data': this.data,
            'itemStyle': {
              'emphasis': {
                'shadowBlur': 10,
                'shadowOffsetX': 0,
                'shadowColor': echarts.itemHoverShadowColor,
              },
            },
            'label': {
              'normal': {
                'textStyle': {
                  'color': echarts.textColor,
                },
              },
            },
            'labelLine': {
              'normal': {
                'lineStyle': {
                  'color': echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['AI', 'Blockchain', 'E-mobility,', 'IoT'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Total Count',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
