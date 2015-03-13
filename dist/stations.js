System.register(["aurelia-http-client", "./app"], function (_export) {
  var HttpClient, App, _createClass, _classCallCheck, url, Stations, IsFavoriteValueConverter, FilterByTermValueConverter;

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
          this.http = http;
          this.app = app;
        }

        _createClass(Stations, {
          loadStations: {
            value: function loadStations() {
              this.stations = JSON.parse(localStorage.getItem("stations")) || [];
            }
          },
          saveStations: {
            value: function saveStations() {
              localStorage.setItem("stations", JSON.stringify(this.stations));
            }
          },
          fetchStations: {
            value: function fetchStations() {
              var _this = this;

              return this.http.get(url).then(function (response) {
                _this.stations = response.content.map(function (x) {
                  x.isFavorite = false;
                  return x;
                });
                _this.saveStations();
              });
            }
          },
          toggleFavorite: {
            value: function toggleFavorite(station) {
              station.isFavorite = !station.isFavorite;
              this.saveStations();
              // FIXME: hack to trigger filter execution
              this.stations = this.stations.slice();
            }
          },
          initializeStations: {
            value: function initializeStations() {
              // load stations from locaStorage first
              this.loadStations();
              // if no stations could be loaded get them from the server
              if (!this.stations.length) {
                return this.fetchStations();
              }
            }
          },
          activate: {
            value: function activate() {
              return this.initializeStations();
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
              return items.filter(function (x) {
                return x.isFavorite;
              });
            }
          }
        });

        return IsFavoriteValueConverter;
      })());
      FilterByTermValueConverter = _export("FilterByTermValueConverter", (function () {
        function FilterByTermValueConverter() {
          _classCallCheck(this, FilterByTermValueConverter);
        }

        _createClass(FilterByTermValueConverter, {
          toView: {
            value: function toView(items, term) {
              if (!term) {
                return [];
              }return items.filter(function (x) {
                return x.name.toLowerCase().indexOf(term.toLowerCase()) !== -1;
              });
            }
          }
        });

        return FilterByTermValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxVQUFVLEVBQ1YsR0FBRyxpQ0FFUCxHQUFHLEVBRU0sUUFBUSxFQStDUix3QkFBd0IsRUFNeEIsMEJBQTBCOzs7O0FBMUQvQixnQkFBVSxzQkFBVixVQUFVOztBQUNWLFNBQUcsUUFBSCxHQUFHOzs7Ozs7Ozs7QUFFUCxTQUFHLEdBQUcsbUNBQW1DO0FBRWhDLGNBQVE7QUFFUixpQkFGQSxRQUFRLENBRVAsR0FBRyxFQUFFLElBQUksRUFBQztnQ0FGWCxRQUFROztBQUdqQixjQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNoQjs7cUJBTlUsUUFBUTtBQVFuQixzQkFBWTttQkFBQSx3QkFBRztBQUNiLGtCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwRTs7QUFFRCxzQkFBWTttQkFBQSx3QkFBRztBQUNiLDBCQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ2pFOztBQUVELHVCQUFhO21CQUFBLHlCQUFHOzs7QUFDZCxxQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDekMsc0JBQUssUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLFVBQUEsQ0FBQyxFQUFJO0FBQ3pDLG1CQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUNyQix5QkFBTyxDQUFDLENBQUM7aUJBQ1YsQ0FBQyxDQUFDO0FBQ0gsc0JBQUssWUFBWSxFQUFFLENBQUM7ZUFDckIsQ0FBQyxDQUFDO2FBQ0o7O0FBRUQsd0JBQWM7bUJBQUEsd0JBQUMsT0FBTyxFQUFFO0FBQ3RCLHFCQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUN6QyxrQkFBSSxDQUFDLFlBQVksRUFBRSxDQUFDOztBQUVwQixrQkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3ZDOztBQUVELDRCQUFrQjttQkFBQSw4QkFBRzs7QUFFbkIsa0JBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7QUFFcEIsa0JBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtBQUN6Qix1QkFBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7ZUFDN0I7YUFDRjs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRTtBQUNSLHFCQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQ2xDOzs7QUEzQ00sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLEdBQUcsRUFBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7O2VBRGpDLFFBQVE7O0FBK0NSLDhCQUF3QjtpQkFBeEIsd0JBQXdCO2dDQUF4Qix3QkFBd0I7OztxQkFBeEIsd0JBQXdCO0FBQ25DLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBRTtBQUNaLHFCQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxVQUFVO2VBQUEsQ0FBQyxDQUFDO2FBQ3hDOzs7O2VBSFUsd0JBQXdCOztBQU14QixnQ0FBMEI7aUJBQTFCLDBCQUEwQjtnQ0FBMUIsMEJBQTBCOzs7cUJBQTFCLDBCQUEwQjtBQUNyQyxnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ2xCLGtCQUFJLENBQUMsSUFBSTtBQUFFLHVCQUFPLEVBQUUsQ0FBQztlQUFBLEFBQ3JCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2VBQUEsQ0FBQyxDQUFDO2FBQ25GOzs7O2VBSlUsMEJBQTBCIiwiZmlsZSI6InN0YXRpb25zLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=