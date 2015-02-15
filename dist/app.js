System.register(["aurelia-router", "bootstrap"], function (_export) {
  "use strict";

  var Router, bootstrap, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router, api) {
          _classCallCheck(this, App);

          this.router = router;
          this.api = api;

          this.router.configure(function (config) {
            config.title = "Stations";
            config.map([{ route: ["", "stations"], moduleId: "stations" }, { route: "stations/:id", moduleId: "departures" }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }
        }, {
          select: {
            value: function select(station) {
              this.selectedStation = station.name;
              this.router.navigate("stations/" + station.name);
            },
            writable: true,
            configurable: true
          },
          clearSelection: {
            value: function clearSelection() {
              this.selectedStation = undefined;
              this.router.navigate("stations/");
            },
            writable: true,
            configurable: true
          },
          activate: {
            value: function activate() {},
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLEVBQ1AsU0FBUyx5Q0FFSCxHQUFHOzs7QUFIUixZQUFNLGtCQUFOLE1BQU07O0FBQ1AsZUFBUzs7Ozs7OztBQUVILFNBQUc7QUFFSCxpQkFGQSxHQUFHLENBRUYsTUFBTSxFQUFFLEdBQUc7Z0NBRlosR0FBRzs7QUFHWixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7QUFFZixjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUM5QixrQkFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7QUFDMUIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQ2hELEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRyxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQ25ELENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQztTQUNKOzs2QkFiVSxHQUFHO0FBQ1AsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBY3BDLGdCQUFNO21CQUFBLGdCQUFDLE9BQU8sRUFBQztBQUNiLGtCQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDcEMsa0JBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEQ7Ozs7QUFFRCx3QkFBYzttQkFBQSwwQkFBRTtBQUNkLGtCQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztBQUNqQyxrQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbkM7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRSxFQUVUOzs7Ozs7ZUEzQlUsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==