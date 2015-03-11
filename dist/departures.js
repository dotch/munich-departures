System.register(["aurelia-http-client", "./app"], function (_export) {
  var HttpClient, App, _createClass, _classCallCheck, url, Departures;

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

      url = "http://mvg.herokuapp.com/stations/";
      Departures = _export("Departures", (function () {
        function Departures(app, http) {
          _classCallCheck(this, Departures);

          this.departures = [];
          this.http = http;
          this.app = app;
        }

        _createClass(Departures, {
          activate: {
            value: function activate(opts) {
              var _this = this;

              return this.http.get(url + opts.id).then(function (response) {
                _this.departures = response.content.departures;
                _this.time = response.content.time;
              });
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [App, HttpClient];
            }
          }
        });

        return Departures;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydHVyZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsRUFDVixHQUFHLGlDQUVQLEdBQUcsRUFFTSxVQUFVOzs7O0FBTGYsZ0JBQVUsc0JBQVYsVUFBVTs7QUFDVixTQUFHLFFBQUgsR0FBRzs7Ozs7Ozs7O0FBRVAsU0FBRyxHQUFHLG9DQUFvQztBQUVqQyxnQkFBVTtBQUVWLGlCQUZBLFVBQVUsQ0FFVCxHQUFHLEVBQUUsSUFBSSxFQUFDO2dDQUZYLFVBQVU7O0FBR25CLGNBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2hCOztxQkFOVSxVQUFVO0FBUXJCLGtCQUFRO21CQUFBLGtCQUFDLElBQUksRUFBQzs7O0FBQ1oscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDbkQsc0JBQUssVUFBVSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQzlDLHNCQUFLLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztlQUNuQyxDQUFDLENBQUM7YUFDSjs7O0FBWk0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUFFOzs7O2VBRGxDLFVBQVUiLCJmaWxlIjoiZGVwYXJ0dXJlcy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9