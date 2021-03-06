/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const staticData = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of quaterCup data', () => {
  it('quaterCup data files returns object', () => {
    expect(staticData.quaterCup).not.toBe('')
  })
})

const schema = {
  properties: {
    name: { type: 'string' },
    americanStandart: { type: 'string' },
    americanStandartOunces: { type: 'string' },
    volume: { type: 'string' },
    weight: { type: 'string' }
  },
  required: [ 'name', 'americanStandart', 'americanStandartOunces', 'volume', 'weight' ]
}

const example = {
  name: 'teaspoon',
  americanStandart: '4 tablespoons',
  americanStandartOunces: '2 ounces',
  volume: '2 milliliters',
  weight: '56.7 grams'
}
describe('test quarter cup json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
