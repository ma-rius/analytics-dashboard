import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {MyDashboardComponent} from './my-dashboard/my-dashboard.component';
import {SentimentComponent} from './sentiment/sentiment.component';
import {PersonalityComponent} from './personality/personality.component';
import {NeedminingComponent} from './needmining/needmining.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'my-dashboard',
    component: MyDashboardComponent,
  }, {
    path: 'sentiment',
    component: SentimentComponent,
  }, {
    path: 'personality',
    component: PersonalityComponent,
  }, {
    path: 'needmining',
    component: NeedminingComponent,
  },
    {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: 'geospatial',
    loadChildren: './geospatial/geospatial.module#GeospatialModule',
  },
    {
      path: '',
      redirectTo: 'my-dashboard',
      pathMatch: 'full',
    }, {
      path: '**',
      component: NotFoundComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
