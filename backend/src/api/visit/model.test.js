import { Visit } from '.'

let visit

beforeEach(async () => {
  visit = await Visit.create({ country: 'test', countryCode: 'test', region: 'test', regionName: 'test', city: 'test', zip: 'test', timezone: 'test', isp: 'test', page: 'test', browser: 'test', time: 'test', ref: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = visit.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(visit.id)
    expect(view.country).toBe(visit.country)
    expect(view.countryCode).toBe(visit.countryCode)
    expect(view.region).toBe(visit.region)
    expect(view.regionName).toBe(visit.regionName)
    expect(view.city).toBe(visit.city)
    expect(view.zip).toBe(visit.zip)
    expect(view.timezone).toBe(visit.timezone)
    expect(view.isp).toBe(visit.isp)
    expect(view.page).toBe(visit.page)
    expect(view.browser).toBe(visit.browser)
    expect(view.time).toBe(visit.time)
    expect(view.ref).toBe(visit.ref)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = visit.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(visit.id)
    expect(view.country).toBe(visit.country)
    expect(view.countryCode).toBe(visit.countryCode)
    expect(view.region).toBe(visit.region)
    expect(view.regionName).toBe(visit.regionName)
    expect(view.city).toBe(visit.city)
    expect(view.zip).toBe(visit.zip)
    expect(view.timezone).toBe(visit.timezone)
    expect(view.isp).toBe(visit.isp)
    expect(view.page).toBe(visit.page)
    expect(view.browser).toBe(visit.browser)
    expect(view.time).toBe(visit.time)
    expect(view.ref).toBe(visit.ref)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
