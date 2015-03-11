System.register(["aurelia-router", "bootstrap"], function (_export) {
  var Router, bootstrap, _createClass, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

        _createClass(App, {
          select: {
            value: function select(station) {
              this.selectedStation = station;
              this.router.navigate("stations/" + station.name);
            }
          },
          clearSelection: {
            value: function clearSelection() {
              this.selectedStation = undefined;
              this.router.navigate("stations/");
            }
          },
          activate: {
            value: function activate() {}
          }
        }, {
          inject: {
            value: function inject() {
              return [Router];
            }
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNQLFNBQVMsaUNBRUgsR0FBRzs7OztBQUhSLFlBQU0sa0JBQU4sTUFBTTs7QUFDUCxlQUFTOzs7Ozs7Ozs7QUFFSCxTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLE1BQU0sRUFBRSxHQUFHLEVBQUU7Z0NBRmQsR0FBRzs7QUFHWixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7QUFFZixjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUM5QixrQkFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7QUFDMUIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQ2hELEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRyxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQ25ELENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQztTQUNKOztxQkFiVSxHQUFHO0FBZWQsZ0JBQU07bUJBQUEsZ0JBQUMsT0FBTyxFQUFDO0FBQ2Isa0JBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO0FBQy9CLGtCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xEOztBQUVELHdCQUFjO21CQUFBLDBCQUFFO0FBQ2Qsa0JBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0FBQ2pDLGtCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNuQzs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRSxFQUVUOzs7QUExQk0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEekIsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==