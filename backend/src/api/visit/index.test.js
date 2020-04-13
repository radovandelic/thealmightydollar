import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Visit } from '.'

const app = () => express(apiRoot, routes)

let visit

beforeEach(async () => {
  visit = await Visit.create({})
})

test('POST /visits 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ country: 'test', countryCode: 'test', region: 'test', regionName: 'test', city: 'test', zip: 'test', timezone: 'test', isp: 'test', page: 'test', browser: 'test', time: 'test', ref: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.country).toEqual('test')
  expect(body.countryCode).toEqual('test')
  expect(body.region).toEqual('test')
  expect(body.regionName).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.zip).toEqual('test')
  expect(body.timezone).toEqual('test')
  expect(body.isp).toEqual('test')
  expect(body.page).toEqual('test')
  expect(body.browser).toEqual('test')
  expect(body.time).toEqual('test')
  expect(body.ref).toEqual('test')
})

test('GET /visits 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})
