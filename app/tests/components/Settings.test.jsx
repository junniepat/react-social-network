let React = require('react')
let ReactDOM = require('react-dom')
let TestUtils = require('react-dom/test-utils')
let expect = require('expect')
let $ = require('jquery')

let {Settings} = require('Settings')

describe('Settings', () => {
  it('should exist', () => {
    expect(Settings).toExist()
  })

})