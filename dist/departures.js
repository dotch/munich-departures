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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydHVyZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSxFQUNWLEdBQUcseUNBRVAsR0FBRyxFQUVNLFVBQVU7OztBQUxmLGdCQUFVLHNCQUFWLFVBQVU7O0FBQ1YsU0FBRyxRQUFILEdBQUc7Ozs7Ozs7QUFFUCxTQUFHLEdBQUcsb0NBQW9DO0FBRWpDLGdCQUFVO0FBRVYsaUJBRkEsVUFBVSxDQUVULEdBQUcsRUFBRSxJQUFJO2dDQUZWLFVBQVU7O0FBR25CLGNBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2hCOzs2QkFOVSxVQUFVO0FBQ2QsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUFFOzs7OztBQU83QyxrQkFBUTttQkFBQSxrQkFBQyxJQUFJLEVBQUM7O0FBQ1oscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDbkQsc0JBQUssVUFBVSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQzlDLHNCQUFLLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztlQUNuQyxDQUFDLENBQUM7YUFDSjs7Ozs7O2VBYlUsVUFBVSIsImZpbGUiOiJkZXBhcnR1cmVzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=