import {HttpClient} from 'aurelia-http-client';
import {App} from './app';

var url = 'http://mvg.herokuapp.com/stations/'

export class Departures{
  static inject() { return [App, HttpClient]; }
  constructor(app, http){
    this.departures = [];
    this.http = http;
    this.app = app;
  }

  activate(opts){
    return this.http.get(url + opts.id).then(response => {
      this.departures = response.content.departures;
      this.time = response.content.time;
    });
  }
}
