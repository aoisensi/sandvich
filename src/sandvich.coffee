Request = require 'request'
URL = require 'url'

class Sandvich
  constructor: (key, data, options = {}) ->
    @key = key
    @data = data
    for intr in data.apilist.interfaces
      @[intr.name] = {}
      for method in intr.methods
        if @[intr.name][method.name]
          continue
        if method.httpmethod != 'GET'
          continue
        k = (key, intr, method) ->
          (params = {}, callback) ->
            params.key = key
            params.format = 'json'
            Request
              url: "https://api.steampowered.com/#{intr.name}/#{method.name}/v#{method.version}"
              method: 'GET'
              json: true
              qs: params,
              (err, body) ->
                callback err, body.body
        @[intr.name][method.name] = new k key, intr, method

module.exports = (key, callback, options = {}) ->
  unless key
    callback 'Need API key. https://steamcommunity.com/dev/apikey'
    return
  Request.get
    url: "https://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1/?format=json&key=#{key}"
    json: true,
    (err, res, body) ->
      if err
        callback(err)
        return
      callback null, new Sandvich key, body, options
      return
