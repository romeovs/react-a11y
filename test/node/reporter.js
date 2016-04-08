import A11y       from '../../src/a11y'
import React      from 'react'
import ReactDOM   from 'react-dom'
import { expect } from 'chai'


const recieves = function (name, type) {
  it(`recieves \`${name}\``, done => {

    const a11y = new A11y(React, {
      ReactDOM
    , reporter (info) {
        expect(info).to.have.property(name)
        expect(info[name]).to.be.a(type)
        a11y.restoreAll()
        done()
      }
    , rules: {
        'img-uses-alt': 1
      }
    })

    a11y.__forceSync()

    const el = <img src='haha' />
  })
}

describe('reporter (node)', () => {
  recieves('msg',         'string')
  recieves('tagName',     'string')
  recieves('severity',    'string')
  recieves('props',       'object')
  recieves('displayName', 'string')
})