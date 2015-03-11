import {HttpClient} from 'aurelia-http-client';
import {App} from './app';

var url = 'http://mvg.herokuapp.com/stations';

export class Stations{
  static inject() { return [App,HttpClient]; }
  constructor(app, http){
    this.stations = [];
    this.favorites = [];
    this.http = http;
    this.app = app;
  }

  loadFavorites() {
    this.favorites = JSON.parse(localStorage.getItem('fav'));
  }

  saveFavorites() {
    localStorage.setItem('fav', JSON.stringify(this.favorites));
  }

  addFavorite(name) {
    this.favorites.push(name);
    this.saveFavorites();
  }

  removeFavorite(name) {
    this.favorites.splice(this.favorites.indexOf(name), 1);
    this.saveFavorites();
  }

  toggleFavorite(station) {
    if (station.isFavorite) {
      this.removeFavorite(station.name);
    } else {
      this.addFavorite(station.name);
    }
    station.isFavorite = !station.isFavorite;
  }

  fetchStations() {
    return this.http.get(url).then(response => {
      var stations = response.content;
      for (var i = 0; i < stations.length; i++) {
        stations[i].isFavorite = this.favorites.indexOf(stations[i].name) !== -1 ? true : false;
        this.stations.push(stations[i]);
      }
    });
  }

  activate(){
    this.loadFavorites();
    return this.fetchStations();
  }
}

export class IsFavoriteValueConverter {
  toView(items) {
    console.log('fav');
    return items.slice(0).filter(x => x.isFavorite);
  }
}

export class FilterValueConverter {
  toView(items, filter) {
    return items.filter(x => x.name.toLowerCase().startsWith(filter));
  }
}
