import {NgModule} from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';

import {GeospatialRoutingModule, routedComponents} from './geospatial-routing.module';

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
export class GeospatialModule {
}
