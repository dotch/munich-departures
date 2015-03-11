System.register(["aurelia-http-client", "./app"], function (_export) {
  var HttpClient, App, _createClass, _classCallCheck, url, Stations, IsFavoriteValueConverter, FilterValueConverter;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_app) {
      App = _app.App;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://mvg.herokuapp.com/stations";
      Stations = _export("Stations", (function () {
        function Stations(app, http) {
          _classCallCheck(this, Stations);

          this.stations = [];
          this.favorites = [];
          this.http = http;
          this.app = app;
        }

        _createClass(Stations, {
          loadFavorites: {
            value: function loadFavorites() {
              this.favorites = JSON.parse(localStorage.getItem("fav"));
            }
          },
          saveFavorites: {
            value: function saveFavorites() {
              localStorage.setItem("fav", JSON.stringify(this.favorites));
            }
          },
          addFavorite: {
            value: function addFavorite(name) {
              this.favorites.push(name);
              this.saveFavorites();
            }
          },
          removeFavorite: {
            value: function removeFavorite(name) {
              this.favorites.splice(this.favorites.indexOf(name), 1);
              this.saveFavorites();
            }
          },
          toggleFavorite: {
            value: function toggleFavorite(station) {
              if (station.isFavorite) {
                this.removeFavorite(station.name);
              } else {
                this.addFavorite(station.name);
              }
              station.isFavorite = !station.isFavorite;
              this.stations.pop();
            }
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
            }
          },
          activate: {
            value: function activate() {
              this.loadFavorites();
              return this.fetchStations();
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [App, HttpClient];
            }
          }
        });

        return Stations;
      })());
      IsFavoriteValueConverter = _export("IsFavoriteValueConverter", (function () {
        function IsFavoriteValueConverter() {
          _classCallCheck(this, IsFavoriteValueConverter);
        }

        _createClass(IsFavoriteValueConverter, {
          toView: {
            value: function toView(items) {
              console.log("fav");
              return items.slice(0).filter(function (x) {
                return x.isFavorite;
              });
            }
          }
        });

        return IsFavoriteValueConverter;
      })());
      FilterValueConverter = _export("FilterValueConverter", (function () {
        function FilterValueConverter() {
          _classCallCheck(this, FilterValueConverter);
        }

        _createClass(FilterValueConverter, {
          toView: {
            value: function toView(items, filter) {
              return items.filter(function (x) {
                return x.name.toLowerCase().startsWith(filter);
              });
            }
          }
        });

        return FilterValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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