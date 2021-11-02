import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrdChartComponent } from './crd-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CrdChartComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [CrdChartComponent],
})
export class CrdChartModule {}
