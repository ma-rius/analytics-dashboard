import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserService} from './users.service';
import {ElectricityService} from './electricity.service';
import {StateService} from './state.service';
import {SmartTableService} from './smart-table.service';
import {PlayerService} from './player.service';
import {DashboardBarService} from './dashboard-bar.service';
import {SelectionService} from './selection.service';

const SERVICES = [
  UserService,
  ElectricityService,
  StateService,
  SmartTableService,
  PlayerService,
  DashboardBarService,
  SelectionService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
