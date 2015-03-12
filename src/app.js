import {Router} from 'aurelia-router';

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

  select(station){
    this.selectedStation = station;
    this.router.navigate('stations/' + station.name);
  }

  clearSelection(){
    this.selectedStation = undefined;
    this.router.navigate('stations/');
  }

  activate(){

  }
}
