System.register(["aurelia-http-client", "./app"], function (_export) {
  "use strict";

  var HttpClient, App, _prototypeProperties, _classCallCheck, url, Stations;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_app) {
      App = _app.App;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://mvg.herokuapp.com/stations";
      Stations = _export("Stations", (function () {
        function Stations(app, http) {
          _classCallCheck(this, Stations);

          this.stations = [];
          this.filteredStations = [];
          this.favorites = [];
          this.http = http;
          this.app = app;
          this.filter = "";
        }

        _prototypeProperties(Stations, {
          inject: {
            value: function inject() {
              return [App, HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          loadFavorites: {
            value: function loadFavorites() {
              this.favorites = JSON.parse(localStorage.getItem("fav"));
            },
            writable: true,
            configurable: true
          },
          saveFavorites: {
            value: function saveFavorites() {
              localStorage.setItem("fav", JSON.stringify(this.favorites));
            },
            writable: true,
            configurable: true
          },
          removeFavorite: {
            value: function removeFavorite(name) {
              this.favorites.splice(this.favorites.indexOf(name), 1);
              this.stations.find(function (x) {
                return x.name == name;
              }).isFavorite = false;
              this.saveFavorites();
            },
            writable: true,
            configurable: true
          },
          toggleFavorite: {
            value: function toggleFavorite(station) {
              if (station.isFavorite) {
                this.favorites.splice(this.favorites.indexOf(station.name), 1);
              } else {
                this.favorites.push(station.name);
              }
              this.saveFavorites();
              station.isFavorite = !station.isFavorite;
            },
            writable: true,
            configurable: true
          },
          getStation: {
            value: function getStation(name) {
              for (var i = 0; i < this.stations.length; i++) {
                if (this.stations[i].name === name) {
                  return this.stations[i];
                }
              }
            },
            writable: true,
            configurable: true
          },
          updateFilter: {
            value: function updateFilter() {
              var _this = this;
              if (!this.filter) {
                this.filteredStations = this.stations;
              } else {
                this.filteredStations = this.stations.filter(function (x) {
                  return x.name.toLowerCase().startsWith(_this.filter.toLowerCase());
                });
              }
            },
            writable: true,
            configurable: true
          },
          fetchStations: {
            value: function fetchStations() {
              var _this = this;
              return this.http.get(url).then(function (response) {
                var stations = response.content;
                for (var i = 0; i < stations.length; i++) {
                  stations[i].isFavorite = _this.favorites.indexOf(stations[i].name) !== -1 ? true : false;
                  _this.stations.push(stations[i]);
                }
              });
            },
            writable: true,
            configurable: true
          },
          activate: {
            value: function activate() {
              var _this = this;
              this.loadFavorites();
              this.fetchStations().then(function () {
                return _this.updateFilter();
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Stations;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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