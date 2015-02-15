System.register(["aurelia-http-client", "./app"], function (_export) {
  "use strict";

  var HttpClient, App, _prototypeProperties, _classCallCheck, url, Departures;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_app) {
      App = _app.App;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://mvg.herokuapp.com/stations/";
      Departures = _export("Departures", (function () {
        function Departures(app, http) {
          _classCallCheck(this, Departures);

          this.departures = [];
          this.time;
          this.http = http;
          this.app = app;
        }

        _prototypeProperties(Departures, {
          inject: {
            value: function inject() {
              return [App, HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(opts) {
              var _this = this;
              return this.http.get(url + opts.id).then(function (response) {
                _this.departures = response.content.departures;
                _this.time = response.content.time;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Departures;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydHVyZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSxFQUNWLEdBQUcseUNBRVAsR0FBRyxFQUVNLFVBQVU7OztBQUxmLGdCQUFVLHNCQUFWLFVBQVU7O0FBQ1YsU0FBRyxRQUFILEdBQUc7Ozs7Ozs7QUFFUCxTQUFHLEdBQUcsb0NBQW9DO0FBRWpDLGdCQUFVO0FBRVYsaUJBRkEsVUFBVSxDQUVULEdBQUcsRUFBRSxJQUFJO2dDQUZWLFVBQVU7O0FBR25CLGNBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxJQUFJLENBQUM7QUFDVixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNoQjs7NkJBUFUsVUFBVTtBQUNkLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFRN0Msa0JBQVE7bUJBQUEsa0JBQUMsSUFBSSxFQUFDOztBQUNaLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ25ELHNCQUFLLFVBQVUsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUM5QyxzQkFBSyxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7ZUFDbkMsQ0FBQyxDQUFDO2FBQ0o7Ozs7OztlQWRVLFVBQVUiLCJmaWxlIjoiZGVwYXJ0dXJlcy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9