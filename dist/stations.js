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
          this.filter;
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
//# sourceMappingURL=data:application/json;base64,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QUk7QUFDekMsb0JBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7QUFDaEMscUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3hDLDBCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLE1BQUssU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUN4Rix3QkFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqQztlQUNGLENBQUMsQ0FBQzthQUNKOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUU7O0FBQ1Isa0JBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyQixrQkFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQzt1QkFBTSxNQUFLLFlBQVksRUFBRTtlQUFBLENBQUMsQ0FBQzthQUN0RDs7Ozs7O2VBMURVLFFBQVEiLCJmaWxlIjoic3RhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==