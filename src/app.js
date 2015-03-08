import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject() { return [Router]; }
  constructor(router, api) {
    this.router = router;
    this.api = api;

    this.router.configure(config => {
      config.title = 'Stations';
      config.map([
        { route: ['','stations'], moduleId: 'stations' },
        { route: 'stations/:id',  moduleId: 'departures' }
      ]);
    });
  }

  select(stationName){
    this.selectedStation = stationName;
    this.router.navigate('stations/' + stationName);
  }

  clearSelection(){
    this.selectedStation = undefined;
    this.router.navigate('stations/');
  }

  activate(){

  }
}
