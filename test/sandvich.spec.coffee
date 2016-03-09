chai = require 'chai'
sinon = require 'sinon'
# using compiled JavaScript file here to be sure module works
sandvich = require '../lib/sandvich.js'

expect = chai.expect
chai.use require 'sinon-chai'

describe 'sandvich', ->
  it 'works', ->
    actual = sandvich 'World'
    expect(actual).to.eql 'Hello World'
