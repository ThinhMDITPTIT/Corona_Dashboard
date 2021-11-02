import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMapComponent } from './leaflet-map.component';

@NgModule({
  declarations: [LeafletMapComponent],
  imports: [CommonModule, LeafletModule],
  exports: [LeafletMapComponent],
})
export class LeafletMapModule {}
