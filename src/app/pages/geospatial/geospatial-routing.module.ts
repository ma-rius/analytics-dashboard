import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GeospatialComponent} from './geospatial.component';
import {HeatmapComponent} from './heatmap/heatmap.component';

const routes: Routes = [{
  path: '',
  component: GeospatialComponent,
  children: [{
    path: 'heatmap',
    component: HeatmapComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeospatialRoutingModule {
}

export const routedComponents = [
  GeospatialComponent, HeatmapComponent,
];
