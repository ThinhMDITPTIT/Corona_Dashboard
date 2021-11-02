import { Component, OnInit } from '@angular/core';
import { Covid19Service } from 'src/services/covid-19.service';

@Component({
  selector: 'app-crd-chart',
  templateUrl: './crd-chart.component.html',
  styleUrls: ['./crd-chart.component.css'],
})
export class CrdChartComponent implements OnInit {
  multi!: any[];
  view: any = [500, 400];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Timeline';
  yAxisLabel: string = 'Total Case';
  timeline: boolean = true;

  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor(private covid19Service: Covid19Service) {}

  ngOnInit(): void {
    this.covid19Service.timeseriesOfCurrentCountryEmit.subscribe((data) => {
      let tempArr: any = [];
      let confirmedObj: any = {
        name: 'Confirmed',
        series: [],
      };
      let deathsObj: any = {
        name: 'Deaths',
        series: [],
      };
      let recoveredObj: any = {
        name: 'Recovered',
        series: [],
      };
      Object.keys(data[0].timeseries).forEach((item: any) => {
        let tempConfirmedObj: any = {
          name: item,
          value: data[0].timeseries[item].confirmed,
        };
        confirmedObj.series.push(tempConfirmedObj);
        let tempDeathsObj: any = {
          name: item,
          value: data[0].timeseries[item].deaths,
        };
        deathsObj.series.push(tempDeathsObj);
        let tempRecoveredObj: any = {
          name: item,
          value: data[0].timeseries[item].recovered,
        };
        recoveredObj.series.push(tempRecoveredObj);
      });
      tempArr.push(confirmedObj);
      tempArr.push(deathsObj);
      tempArr.push(recoveredObj);
      // console.log(tempArr);
      this.multi = tempArr;
    });
  }
  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
