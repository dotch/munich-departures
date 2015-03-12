import {HttpClient} from 'aurelia-http-client';
import {App} from './app';

var url = 'http://mvg.herokuapp.com/stations';

export class Stations{
  static inject() { return [App,HttpClient]; }
  constructor(app, http){
    this.stations = [];
    this.http = http;
    this.app = app;
  }

  loadStations() {
    this.stations = JSON.parse(localStorage.getItem('stations')) || [];
  }

  saveStations() {
    localStorage.setItem('stations', JSON.stringify(this.stations));
  }

  fetchStations() {
    return this.http.get(url).then(response => {
      this.stations = response.content.map( x => {
        x.isFavorite = false;
        return x;
      });
      this.saveStations();
    });
  }

  toggleFavorite(station) {
    station.isFavorite = !station.isFavorite;
    this.saveStations();
    // FIXME: hack to trigger filter execution
    // this.stations = this.stations.slice();
  }

  initializeStations() {
    // load stations from locaStorage first
    this.loadStations();
    // if no stations could be loaded get them from the server
    if (!this.stations.length) {
      return this.fetchStations();
    }
  }

  activate(){
    return this.initializeStations();
  }
}

export class IsFavoriteValueConverter {
  toView(items) {
    return items.filter(x => x.isFavorite);
  }
}

export class FilterByTermValueConverter {
  toView(items, term) {
    return items.filter(x => x.name.toLowerCase().startsWith(term));
  }
}
