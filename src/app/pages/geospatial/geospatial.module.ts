import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import {HeatmapComponent} from './heatmap/heatmap.component';

import { GeospatialRoutingModule, routedComponents } from './geospatial-routing.module';
import {GeospatialComponent} from './geospatial.component';

@NgModule({
  imports: [
    GeospatialRoutingModule,
    ThemeModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],
})
export class GeospatialModule { }
