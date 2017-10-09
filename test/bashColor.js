var ansiHTML = require('../')
var chalk = require('chalk')
var color = require('bash-color')
var chai = require('chai')
var expect = chai.expect
var _ = require('lodash')

var text = 'this text is green'
var bashColorText = "[1;36mI[0m"
var bashColorText2 = "[1;36mI[0m"
var chalkColorText = chalk.green(text)


describe('bash-color', function () {
  it('bash-color text is equal to chalk text', function () {
    expect(ansiHTML(bashColorText)).to.equal('<span style="color:#00ffee;">I<span style="font-weight:normal;opacity:1;color:#fff;background:#000;"></span></span>')
  })
})