import {HttpClient} from 'aurelia-http-client';
import {App} from './app';

var url = 'http://mvg.herokuapp.com/stations'

export class Stations{
  static inject() { return [App,HttpClient]; }
  constructor(app, http){
    this.stations = [];
    this.filteredStations = [];
    this.favorites = [];
    this.http = http;
    this.app = app;
    this.filter;
  }

  loadFavorites() {
    this.favorites = JSON.parse(localStorage.getItem('fav'));
  }

  saveFavorites() {
    localStorage.setItem('fav', JSON.stringify(this.favorites));
  }

  removeFavorite(name) {
    this.favorites.splice(this.favorites.indexOf(name), 1);
    this.stations.find(x => x.name == name).isFavorite = false;
    this.saveFavorites();
  }

  toggleFavorite(station) {
    if (station.isFavorite) {
      this.favorites.splice(this.favorites.indexOf(station.name), 1);
    } else {
      this.favorites.push(station.name);
    }
    this.saveFavorites();
    station.isFavorite = !station.isFavorite;
  }

  updateFilter() {
    if (!this.filter) {
      this.filteredStations = this.stations;
    } else {
      this.filteredStations = this.stations.filter(
        x => x.name.toLowerCase().startsWith(this.filter.toLowerCase())
      );
    }
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
    this.fetchStations().then(() => this.updateFilter());
  }
}
