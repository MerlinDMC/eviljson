var vm = require('vm');

var emptyCtx = vm.createContext({});

module.exports = {
  parse: function(data) {
    var script = new vm.Script('_=' + data);
    return script.runInContext(emptyCtx, {});
  },
  stringify: JSON.stringify
};
