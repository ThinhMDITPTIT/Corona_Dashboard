import { Component, OnInit } from '@angular/core';
import { Covid19Service } from 'src/services/covid-19.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  public cardWorldConfirmed: any;
  public cardWorldRecovered: any;
  public cardWorldDeaths: any;
  public cardWorldFatalityRate: any;
  public cardRegionConfirmed: any;
  public cardRegionRecovered: any;
  public cardRegionDeaths: any;
  public cardRegionFatalityRate: any;
  public countryCodeArr: any[];
  public currentCountryCode: string;

  public constructor(private covid19Service: Covid19Service) {
    this.countryCodeArr = [];
    this.currentCountryCode = 'VN';
    // World
    this.cardWorldConfirmed = {
      backGround: 'bg-primary',
      textColor: 'text-white',
      icon: {
        prefix: 'fas',
        name: 'user',
      },
      title: 'Confirmed',
      body: '',
    };
    this.cardWorldRecovered = {
      backGround: 'bg-success',
      textColor: 'text-white',
      icon: {
        prefix: 'fas',
        name: 'plus-square',
      },
      title: 'Recovered',
      body: '',
    };
    this.cardWorldDeaths = {
      backGround: 'bg-danger',
      textColor: 'text-white',
      icon: {
        prefix: 'fas',
        name: 'procedures',
      },
      title: 'Deaths',
      body: '',
    };
    this.cardWorldFatalityRate = {
      backGround: 'bg-secondary',
      textColor: 'text-white',
      icon: {
        prefix: 'fas',
        name: 'info-circle',
      },
      title: 'Fatality Rate',
      body: '',
    };
    // Regional
    this.cardRegionConfirmed = {
      backGround: 'bg-primary',
      textColor: 'text-white',
      icon: {
        prefix: 'fas',
        name: 'user',
      },
      title: 'Confirmed',
      body: '',
    };
    this.cardRegionRecovered = {
      backGround: 'bg-success',
      textColor: 'text-white',
      icon: {
        prefix: 'fas',
        name: 'plus-square',
      },
      title: 'Recovered',
      body: '',
    };
    this.cardRegionDeaths = {
      backGround: 'bg-danger',
      textColor: 'text-white',
      icon: {
        prefix: 'fas',
        name: 'procedures',
      },
      title: 'Deaths',
      body: '',
    };
    this.cardRegionFatalityRate = {
      backGround: 'bg-secondary',
      textColor: 'text-white',
      icon: {
        prefix: 'fas',
        name: 'info-circle',
      },
      title: 'Fatality Rate',
      body: '',
    };
  }

  ngOnInit() {
    this.covid19Service.getBrefInfo().subscribe((data) => {
      this.cardWorldConfirmed.body = data.confirmed;
      this.cardWorldRecovered.body = data.recovered;
      this.cardWorldDeaths.body = data.deaths;
      if (data.deaths !== 0 && data.confirmed !== 0) {
        this.cardWorldFatalityRate.body =
          ((data.deaths / data.confirmed) * 100).toFixed(2) + '%';
      } else {
        this.cardWorldFatalityRate.body = 0 + '%';
      }
    });
    this.covid19Service.getLatestInfo().subscribe((data) => {
      let tempArr: any[] = [];
      data.forEach((item: any) => {
        let newObj = {
          countrycode: {
            iso2: item?.countrycode?.iso2,
            iso3: item?.countrycode?.iso3,
          },
          ...item,
        };
        if (tempArr.indexOf(item.countryregion) === -1) {
          tempArr.push(item.countryregion);
          this.countryCodeArr.push(newObj);
        }
      });
      this.covid19Service.totalCountryInformation = this.countryCodeArr;
    });
    this.covid19Service
      .getInfoByCountryAndIso2Code(this.currentCountryCode)
      .subscribe((data) => {
        this.covid19Service.worldInformation = data;
        this.cardRegionConfirmed.body = data[0].confirmed;
        this.cardRegionRecovered.body = data[0].recovered;
        this.cardRegionDeaths.body = data[0].deaths;
        if (data[0].deaths !== 0 && data[0].confirmed !== 0) {
          this.cardRegionFatalityRate.body =
            ((data[0].deaths / data[0].confirmed) * 100).toFixed(2) + '%';
        } else {
          this.cardRegionFatalityRate.body = 0 + '%';
        }
      });
    this.covid19Service
      .getInfoByTimeseriesAndIso2Code(this.currentCountryCode)
      .subscribe((data) => {
        this.covid19Service.timeseriesOfCurrentCountry = data;
      });
  }

  public changeCurrentCountry(event: any) {
    this.currentCountryCode = event.target.value;
    this.covid19Service
      .getInfoByCountryAndIso2Code(this.currentCountryCode)
      .subscribe((data) => {
        this.covid19Service.worldInformation = data;
        this.cardRegionConfirmed.body = data[0].confirmed;
        this.cardRegionRecovered.body = data[0].recovered;
        this.cardRegionDeaths.body = data[0].deaths;
        if (data[0].deaths !== 0 && data[0].confirmed !== 0) {
          this.cardRegionFatalityRate.body =
            ((data[0].deaths / data[0].confirmed) * 100).toFixed(2) + '%';
        } else {
          this.cardRegionFatalityRate.body = 0 + '%';
        }
      });
    this.covid19Service
      .getInfoByTimeseriesAndIso2Code(this.currentCountryCode)
      .subscribe((data) => {
        this.covid19Service.timeseriesOfCurrentCountry = data;
      });
  }
}
