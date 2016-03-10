var Request, Sandvich, URL;

Request = require('request');

URL = require('url');

Sandvich = (function() {
  function Sandvich(key, data, options) {
    var i, intr, j, k, len, len1, method, ref, ref1;
    if (options == null) {
      options = {};
    }
    this.key = key;
    this.data = data;
    ref = data.apilist.interfaces;
    for (i = 0, len = ref.length; i < len; i++) {
      intr = ref[i];
      this[intr.name] = {};
      ref1 = intr.methods;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        method = ref1[j];
        if (this[intr.name][method.name]) {
          continue;
        }
        if (method.httpmethod !== 'GET') {
          continue;
        }
        k = function(key, intr, method) {
          return function(params, callback) {
            if (params == null) {
              params = {};
            }
            params.key = key;
            params.format = 'json';
            return Request({
              url: "https://api.steampowered.com/" + intr.name + "/" + method.name + "/v" + method.version,
              method: 'GET',
              json: true,
              qs: params
            }, function(err, body) {
              return callback(err, body.body);
            });
          };
        };
        this[intr.name][method.name] = new k(key, intr, method);
      }
    }
  }

  return Sandvich;

})();

module.exports = function(key, callback, options) {
  if (options == null) {
    options = {};
  }
  if (!key) {
    callback('Need API key. https://steamcommunity.com/dev/apikey');
    return;
  }
  return Request.get({
    url: "https://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1/?format=json&key=" + key,
    json: true
  }, function(err, res, body) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, new Sandvich(key, body, options));
  });
};
