System.register(["nprogress", "aurelia-framework"], function (_export) {
  "use strict";

  var nprogress, Behavior, _prototypeProperties, _classCallCheck, LoadingIndicator;
  return {
    setters: [function (_nprogress) {
      nprogress = _nprogress["default"];
    }, function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      LoadingIndicator = _export("LoadingIndicator", (function () {
        function LoadingIndicator() {
          _classCallCheck(this, LoadingIndicator);
        }

        _prototypeProperties(LoadingIndicator, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("loading-indicator").withProperty("loading").noView();
            },
            writable: true,
            configurable: true
          }
        }, {
          loadingChanged: {
            value: function loadingChanged(newValue) {
              if (newValue) {
                nprogress.start();
              } else {
                nprogress.done();
              }
            },
            writable: true,
            configurable: true
          }
        });

        return LoadingIndicator;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaW5kaWNhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFPLFNBQVMsRUFDUixRQUFRLHlDQUVILGdCQUFnQjs7O0FBSHRCLGVBQVM7O0FBQ1IsY0FBUSxxQkFBUixRQUFROzs7Ozs7O0FBRUgsc0JBQWdCO2lCQUFoQixnQkFBZ0I7Z0NBQWhCLGdCQUFnQjs7OzZCQUFoQixnQkFBZ0I7QUFDcEIsa0JBQVE7bUJBQUEsb0JBQUU7QUFDZixxQkFBTyxRQUFRLENBQ1osYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQ2xDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FDdkIsTUFBTSxFQUFFLENBQUM7YUFDYjs7Ozs7QUFFRCx3QkFBYzttQkFBQSx3QkFBQyxRQUFRLEVBQUM7QUFDdEIsa0JBQUcsUUFBUSxFQUFDO0FBQ1YseUJBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztlQUNuQixNQUFJO0FBQ0gseUJBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztlQUNsQjthQUNGOzs7Ozs7ZUFkVSxnQkFBZ0IiLCJmaWxlIjoibG9hZGluZy1pbmRpY2F0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==