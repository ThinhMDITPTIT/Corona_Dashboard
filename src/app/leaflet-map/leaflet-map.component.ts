import { Component, OnInit } from '@angular/core';
import { circle, latLng, marker, polygon, tileLayer } from 'leaflet';
import { Covid19Service } from 'src/services/covid-19.service';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css'],
})
export class LeafletMapComponent implements OnInit {
  public options: any;
  public layers: any;
  constructor(private covid19Service: Covid19Service) {
    this.layers = [];
  }

  ngOnInit(): void {
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          minZoom: 1,
          attribution: '...',
        }),
      ],
      zoom: 0,
      center: latLng(51.505, -0.09),
    };

    this.covid19Service.totalCountryInformationEmit.subscribe((data) => {
      let tempArr: any = [];
      data.forEach((item: any) => {
        tempArr.push(item.confirmed);
      });
      data.forEach((item: any) => {
        let layer = circle([item.location.lat, item.location.lng], {
          radius:
            item.confirmed / Math.max(...tempArr) > 0.2
              ? 1000000 * (item.confirmed / Math.max(...tempArr))
              : 3000000 * (item.confirmed / Math.max(...tempArr)),
          color: '#f03',
          fillColor:
            item.confirmed / Math.max(...tempArr) > 0.2 ? '#f03' : '#fd7e14',
          opacity: 0.6,
          fillOpacity: (item.confirmed / Math.max(...tempArr)) * 0.9,
        });
        layer.bindTooltip(
          `
            Country: ${item.countryregion},
            Confirmed: ${item.confirmed
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          `
        );
        this.layers.push(layer);
      });
    });
  }
}
